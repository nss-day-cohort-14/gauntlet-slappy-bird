"use strict";
//weapons and second spell will be set here
const Weapons= require("./weapons");
const Spells= require("./spells");
const Roles= require("./classes");

//////////////////////////// PLAYER 1
var player1 = new Roles.IT();
player1.weapon = new Weapons.Stapler();
player1.spell1= new player1.spell1();
player1.spell2= new Spells.Thermostat();
console.log("player1",player1.name);
console.log("player1",player1.weapon);


function generateHp(player){
  return Math.floor(Math.random() * ((player.energy + 20) - player.energy) + player.energy);
}


function canDuelWeild (player){
	if(player.weapon.handsUsed === 1){
		console.log("select another weapon");
		return true;
	} else {
		console.log("your hands are full");
		return false;	
	}
}

player1.energy =  generateHp(player1);
// console.log("player1.energy",player1.energy);

player1.weapon.canDuelWeild = canDuelWeild(player1);


//////////////////////////// PLAYER 2
var player2 = new Roles.Warehouse();
player2.energy = generateHp(player2);
player2.weapon = new Weapons.Shredder();
player2.weapon.canDuelWeild = canDuelWeild(player2);


module.exports = {player1, player2};
