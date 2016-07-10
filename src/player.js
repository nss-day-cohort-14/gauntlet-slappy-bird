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
  var playerName = $("#player-name");
	
	player1= new Roles[this.id]();
	player1.spell1 = new player1.spell1();
	player1.energy=generateHp(player1);
	player1img.html(`<img src="${player1.src}">`);
  player1img.append(`<div class="energy">Energy: ${player1.energy}</div>`);
  player1img.append(`<div class="progress">
  <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%">
  </div>
  </div>`);
  player1img.append(`<div class="experience">Experience: ${player1.experience}</div>`);
  player1img.append(`<div class="skill">Skill: ${player1.skill}</div>`);
  player1img.append(`<div class="role">Role: ${player1.name}</div>`);
  player1.name = playerName[0].value;


	player2 = new Roles[Object.keys(Roles)[randomClass]]();
	player2.spell1= new player2.spell1();
	player2.energy= generateHp(player2);
	player2img.html(`<img src="${player2.src2}">`);
  player2img.append(`<div class="energy">Energy: ${player2.energy}</div>`);
  player2img.append(`<div class="progress">
  <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%">
  </div>
  </div>`);
  player2img.append(`<div class="experience">Experience: ${player2.experience}</div>`);
  player2img.append(`<div class="skill">Skill: ${player2.skill}</div>`);
  player2img.append(`<div class="role">Role: ${player2.name}</div>`);
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


function generateHp(player){
  return Math.floor(Math.random() * ((player.energy + 20) - player.energy) + player.energy);
}


function equipPlayer(){
  var randomWeapon= Math.floor(Math.random()*(11)+1);
  player1.weapon = new Weapons[this.id]();
  player2.weapon = new Weapons[Object.keys(Weapons)[randomWeapon]]();
  console.log("weapon", player1.weapon);
  console.log("enemy", player2.weapon);
}

