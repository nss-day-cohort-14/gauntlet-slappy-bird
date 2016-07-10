"use strict";
const Weapons= require("./weapons");
const Spells= require("./spells");
const Roles= require("./classes");
const Players= require("./player");


$(document).ready(function() {

  $("#player-setup").show();

  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    var moveAlong = false;

    switch (nextCard) {
      case "card--class":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--oneweapon":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--twoweapon":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--spells":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--battleground":
        moveAlong = ($("#player-name").val() !== "");
        break;
    }

    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }
  });

  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });
});

