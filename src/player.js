"use strict";
//weapons and second spell will be set here
const Weapons= require("./weapons");
const Spells= require("./spells");
const Roles= require("./classes");

//////////////////////////// PLAYER 1
var player1 = new Roles.Secretary();
player1.weapon = new Weapons.Stapler();
player1.spell2 = new Spells.Bonus();
// console.log("player1",player1);

function generateHp(player){
  return Math.floor(Math.random() * ((player.energy + 20) - player.energy) + player.energy);
}

player1.energy =  generateHp(player1);
// console.log("player1.energy",player1.energy);

//////////////////////////// PLAYER 2
var player2 = new Roles.CEO();
player2.energy = generateHp(player2);


module.exports = {player1, player2};
