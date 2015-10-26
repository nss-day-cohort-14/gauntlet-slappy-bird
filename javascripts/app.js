$(document).ready(function() {

  /*
    Test code to generate a human player and an orc player
   */
  // var warrior = new Human("Joe");
  // warrior.init();
  // warrior.init(AvailableClasses.Monk);

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
            HumanCombatant.init(chosenProfession, chosenWeapon);
            console.log("HumanCombatant",HumanCombatant);
            nextCard = "card--battleground";
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
          EnemyCombatant = new Orc();
          EnemyCombatant.init(new Assassin(), new Dart());
          $(".battle--human").html(HumanCombatant.toString());
          $(".battle--enemy").html(EnemyCombatant.toString());

          startCombat(HumanCombatant, EnemyCombatant);

          console.log(HumanCombatant.toString());
          console.log(EnemyCombatant.toString());
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
    }

    $("#battle-record").scrollTop(9999999);
  }

  function startCombat(human, enemy) {
    battleground = new Battleground(human, enemy);
    battleTimer = window.setInterval(meleeRound, 2000);
  }

  /*
    Handle user choosing a profession for the human combatant
   */
  $(".class__link").click(function(e) {
    HumanCombatant = new Human($("#player-name").val());
    chosenProfession = AvailableClasses[$(this).children(".btn__text").html()];
    console.log("chosenProfession",chosenProfession);
  });


  /*
    Handle user choosing a weapon for the human combatant
   */
  $(document).on("click", ".weapon__link", function(e) {
    var weapon = $(this).find(".btn__text").attr("weapon");
    chosenWeapon = new window[weapon]();
    console.log("chosenWeapon",chosenWeapon);
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