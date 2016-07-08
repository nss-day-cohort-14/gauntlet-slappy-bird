"use strict";
//weapons and second spell will be set here

const Weapons= require("./weapons");
const Spells= require("./spells");
const Roles= require("./classes");

var player1 = new Roles.Intern();
var player2 = null;
var allRoles = $(".role");
var allSpells = $(".spell");
var allWeapons = $(".weapon");
var battleBtn =$("#battle");


battleBtn.click(startCalc);

allRoles.click(createClass);

allSpells.click(createSpell);

allWeapons.click(equipPlayer);


function createClass(){
	var randomClass= Math.floor(Math.random()*(8)+1);
	var player1img = $("#player1img");
	var player2img = $("#player2img");
	
	player1= new Roles[this.id]();
	player1.spell1 = new player1.spell1();
	player1.energy=generateHp(player1);
	player1img.html(`<img src="${player1.src}">`);

	player2 = new Roles[Object.keys(Roles)[randomClass]]();
	player2.spell1= new player2.spell1();
	player2.energy= generateHp(player2);
	player2img.html(`<img src="${player2.src}">`);
	

}

function createSpell(){
  var spellArray = ["Thermostat", "Microwave_Tuna", "Bonus", "Meeting"];
  var randomSpell = Math.floor(Math.random()*(3)+1);
  console.log(this.id);
  player1.spell2 = new Spells[this.id]();
        var magic1 = $("#spell1");
        var magic2 = $("#spell2");
        magic1[0].innerText=player1.spell1.name;
        magic2[0].innerText=player1.spell2.name;
  console.log(player1.spell1);
  console.log(player1.spell2);



  player2.spell2 = new Spells[spellArray[randomSpell]]();

}


function startCalc(){
	module.exports={player1,player2};
	var calculations=require("./calculations");

}
//////////////////////////// PLAYER 1
// player1.weapon = new Weapons.Stapler();
// player1.spell1= new player1.spell1();
// player1.spell2= new Spells.Thermostat();



function generateHp(player){
  return Math.floor(Math.random() * ((player.energy + 20) - player.energy) + player.energy);
}


// function canDuelWeild (player){
// 	if(player.weapon.handsUsed === 1){
// 		console.log("select another weapon");
// 		return true;
// 	} else {
// 		console.log("your hands are full");
// 		return false;	
// 	}
// }

// player1.energy =  generateHp(player1);
// console.log("player1.energy",player1.energy);

// player1.weapon.canDuelWeild = canDuelWeild(player1);


//////////////////////////// PLAYER 2
// var player2 = new Roles.Warehouse();
// player2.energy = generateHp(player2);
// player2.weapon = new Weapons.Shredder();
// player2.weapon.canDuelWeild = canDuelWeild(player2);


// module.exports={player1,player2};



function equipPlayer(){
  var randomWeapon= Math.floor(Math.random()*(11)+1);
  player1.weapon = new Weapons[this.id]();
  player2.weapon = new Weapons[Object.keys(Weapons)[randomWeapon]]();
  console.log("weapon", player1.weapon);
  console.log("enemy", player2.weapon);
}


