$(document).ready(function() {

  /*
    Test code to generate a human player and an orc player
   */
  var warrior = new Human();
  // warrior.generateClass();  // This will be used for "Surprise me" option
  // warrior.init();
  warrior.init(new Ninja());
  console.log(warrior.toString());

  var orc = new Sith();
  orc.init(new Lord());
  console.log(orc.toString());


  /*
    END OF TEST CODE

    Show the initial view that accepts player name
   */
   var HumanCombatant = null;

  $("#player-setup").show();


  $(".class__link").click(function(e) {
    HumanCombatant = new Human();
    var chosenProfession = $(this).children(".btn__text").html();
    var profession = new window[chosenProfession]();
    HumanCombatant.init(profession);
    console.log(HumanCombatant.toString());
  });


  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */
  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    var moveAlong = false;

    switch (nextCard) {
      case "card--class":
        moveAlong = $("#player-name").val() !== "";
        break;
      case "card--weapon":
        moveAlong = HumanCombatant !== null;
        break;
    }

    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }
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