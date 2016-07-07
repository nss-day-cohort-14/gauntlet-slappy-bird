"use strict";
//weapons and second spell will be set here

const Weapons= require("./weapons");
const Spells= require("./spells");
const Roles= require("./classes");

var player1 = new Roles.Intern();
var allRoles = $(".role");
var battleBtn =$("#battle");

battleBtn.click(startCalc);

allRoles.click(createClass);

function createClass(){
	var randomClass= Math.floor(Math.random()*(8)+1);
	
	player1= new Roles[this.id]();
	player1.spell1 = new player1.spell1();
	player1.energy=generateHp(player1);

	player2 = new Roles[Object.keys(Roles)[randomClass]]();
	
	player2.spell1= new player2.spell1();
	player2.generateHp= generateHp(player2);
	console.log(player1,player2);
	
	
}


function startCalc(){
	player1.spell2=Spells.Bonus();
	module.exports={player1,player2};
	var calculations=require("./calculations");

}
//////////////////////////// PLAYER 1
player1.weapon = new Weapons.Stapler();
player1.spell1= new player1.spell1();
player1.spell2= new Spells.Thermostat();



function generateHp(player){
  return Math.floor(Math.random() * ((player.energy + 20) - player.energy) + player.energy);
}

player1.energy =  generateHp(player1);
// console.log("player1.energy",player1.energy);

//////////////////////////// PLAYER 2
var player2 = new Roles.Warehouse();
player2.energy = generateHp(player2);
player2.weapon = new Weapons.Shredder();

module.exports={player1,player2};






