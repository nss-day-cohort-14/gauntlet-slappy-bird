$(document).ready(function() {

  /*
    Test code to generate a human player and an orc player
   */
  var warrior = new Human();
  // warrior.generateClass();  // This will be used for "Surprise me" option
  warrior.setClass(new Ninja()); // Use this method when specific class selected
  warrior.generateWeapon();
  console.log(warrior.toString());

  var orc = new Goblin();
  orc.generateClass();
  warrior.generateWeapon();
  if (orc.class.magical) {
    orc.setWeapon(new Sphere());
  } else {
    orc.setWeapon(new BroadSword());
  }
  console.log(orc.toString());


  /*
    END OF TEST CODE

    Show the initial view that accepts player name
   */
  $("#player-setup").show();

  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */
  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    var moveAlong = false;

    switch (nextCard) {
      case "card--class":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--weapon":
        moveAlong = ($("#player-name").val() !== "");
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