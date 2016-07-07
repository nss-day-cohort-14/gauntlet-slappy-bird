"use strict";
//all damage will be calculated here
var players = require("./player");
// console.log("",players.player1 );

function checkAccuracy(){
  return Math.floor(Math.random() * (100) + 1);
}

function calculateWpnDmg (attacker, defender){
  var randomNum = checkAccuracy();  //checks whether or not you will hit or not
  if (randomNum < attacker.weapon.accuracy){
    var randomPower = Math.floor(Math.random() * ((1.5 * attacker.weapon.power) - attacker.weapon.power) + attacker.weapon.power);  //Randomize weapon damage
    var finalDmg = Math.floor((attacker.skill / 100) * randomPower);  // Player Skill Damage multiplier
    defender.energy -= finalDmg;

    console.log("You Hit!", randomNum);    
    console.log("Weapon Power", attacker.weapon.power);
    console.log("Random Power", randomPower);
    console.log("finalDmg is", finalDmg);
    console.log(`${defender.name}`, "HP is currently", defender.energy);

  } else {
    console.log("You Missed", randomNum);
  }
}

// function calculateSpellDmg (attacker, defender){
//   // var randomNum = checkAccuracy();  //checks whether or not you will hit or not
//   if (randomNum < attacker.spells){




while (players.player1.energy > 0 && players.player2.energy > 0){
  calculateWpnDmg(players.player1, players.player2);
  calculateWpnDmg(players.player2, players.player1);
}



// calculateWpnDmg(players.player1, players.player2);
