$(document).ready(function() {

  /*
    Test code to generate a human player and an orc player
   */
  console.log("");
  console.log("Creating a new Human instance");
  var warrior = new Human("Joe");
  warrior.init();
  // warrior.init(AvailableClasses.Monk);
  console.log(warrior);
  console.log(warrior.toString());

  // var enemy = AvailableEnemies.randomEnemy();
  // enemy.init();


  // console.log(warrior.toString());
  // console.log(enemy.toString());


  /*
    END OF TEST CODE

    Show the initial view that accepts player name
   */
  var HumanCombatant = null;
  var EnemyCombatant = null;
  var chosenProfession = null;
  var chosenWeapon = null;
  var battleground = null;

  $("#player-setup").show();

  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */
  $(".card__link").click(function(e) {
    var currentCard = $(this).attr("current");
    var nextCard = $(this).attr("next");
    var moveAlong = false;

    switch (currentCard) {
      case "card--name":
        moveAlong = $("#player-name").val() !== "";
        break;
      case "card--class":
        moveAlong = chosenProfession !== null;
        break;
      case "card--weapon":
        moveAlong = chosenWeapon !== null;
        break;
    };

    if (moveAlong) {
      /*
        If all requirements met to move along to the next screen, set
        that screen up now if there is any dynamic elements that need
        to be created before it is shown.
       */
      switch (nextCard) {
        case "card--class":
          break;

        case "card--weapon":
          if (chosenProfession.magical) {
            HumanCombatant.init(chosenProfession);
            nextCard = "card--battleground";
            startCombat();
          } else {
            var weaponEl = $("#weapon-select").children(".card__prompt");
            $(".weapons").remove();

            var block = "<div class=\"row weapons\">";
            block += '<div class="col-sm-6">';

            chosenProfession.allowedWeapons.forEach(function(weapon, index) {
              var weaponName = new window[weapon]().toString();
              if (index === 3) {
                block += "</div>";
                block += "<div class=\"col-sm-6\">";
              }
              block += '<div class="card__button"><a class="weapon__link btn btn--big btn--blue" href="#"><span class="btn__prompt">&gt;</span><span class="btn__text" weapon='+weapon+'>' + weaponName + '</span></a></div>';
            });
            block += "</div></div>";
            weaponEl.append(block);
          }
          break;

        case "card--battleground":
          HumanCombatant.init(chosenProfession, chosenWeapon);
          startCombat();

          break;
      }

      /*
        Now that any initialization is done, hide all cards and show next one
       */
      $(".card").hide();
      $("." + nextCard).show();
    }
  });

  var continueBattle = true;
  var battleTimer;

  function meleeRound() {
    if (!battleground.melee()) {
      window.clearInterval(battleTimer);

      if (HumanCombatant.health > 0) {
        $("#battle-record").after("<button class=\"btn btn--big btn--yellow btn--another\">Fight another</button>");
      } else {
        $("#battle-record").after("<button class=\"btn btn--big btn--yellow btn--again\">Play Again</button>");
      }
    }

    $("#battle-record").scrollTop(9999999);
  }

  function startCombat() {
    EnemyCombatant = AvailableEnemies.randomEnemy();
    EnemyCombatant.init();

    $(".battle--human").html(HumanCombatant.toString());
    $(".battle--enemy").html(EnemyCombatant.toString());

    battleground = new Battleground(HumanCombatant, EnemyCombatant);
    battleTimer = window.setInterval(meleeRound, 2000);
  }

  /*
    When the "Fight Another" button is clicked just start
    the battle all over again with the player's existing
    health, and a new opponent.
   */
  $(document).on("click", ".btn--another", function() {
    $(".btn--another").remove();
    startCombat();
  });

  /*
    When the "Fight Again" button is clicked just start
    the battle all over again with the player's existing
    health, and a new opponent.
   */
  $(document).on("click", ".btn--again", function() {
    $(".btn--again").remove();
    $(".card").hide();
    $("#player-setup").show();
    $("#battle-record").empty();
  });

  /*
    Handle user choosing a profession for the human combatant
   */
  $(".class__link").click(function(e) {
    HumanCombatant = new Human($("#player-name").val());
    chosenProfession = AvailableClasses[$(this).children(".btn__text").html()];
  });


  /*
    Handle user choosing a weapon for the human combatant
   */
  $(document).on("click", ".weapon__link", function(e) {
    var weapon = $(this).find(".btn__text").attr("weapon");
    chosenWeapon = new window[weapon]();
  });


  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });

  /*
    Whichever combatant has the higher intelligence score
    will attack first. Intelligence also increases damange 
    to magical attacks.
   */

});