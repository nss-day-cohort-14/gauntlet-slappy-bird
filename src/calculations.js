"use strict";
//all damage will be calculated here
var players = require("./player");
// console.log("",players.player1 );

function checkAccuracy(){
  return Math.floor(Math.random() * (100) + 1);
}

function calculateWpnDmg (attacker, defender){
  var randomNum = checkAccuracy();
  if (randomNum < attacker.weapon.accuracy){
    var randomPower = Math.floor(Math.random() * ((1.5 * attacker.weapon.power) - attacker.weapon.power) + attacker.weapon.power);
    console.log("You Hit", randomNum);
    console.log("Weapon Power", attacker.weapon.power);
    console.log("Random Power", randomPower);
  } else {
    console.log("You Missed", randomNum);
  }
};

calculateWpnDmg(players.player1, players.player2);

