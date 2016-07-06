"use strict";
var spellList={};

spellList.Spell=function(){
  this.power=10;
  this.lastingEffect=false;
  this.energyRestored=0;
};

spellList.Coffee=function(){
  this.power=0;
  this.energyRestored=50;
};
Coffee.prototype = new Spell();

spellList.Demotion = function(){
	this.lastingEffect = true;
	this.skillReduction = 25;
	this.energyReduction = 10;
};
Demotion.prototype = new Spell();

spellList.Serevence = function(){
	this.lastingEffect = true;
	this.experienceReduction = 25;
	this.energyReduction = 10;
};

Serevence.prototype = new Spell();

spellList.BubbleWrap = function(){
	this.lastingEffect = true;
	this.energyRestored = 10;
};

BubbleWrap.prototype = new Spell();

spellList.Team_Building_Excercise = function(){
	this.lastingEffect = true;
	this.energyReduction = 25;
};

Team_Building_Excercise.prototype = new Spell();

spellList.Virus = function(){
	this.lastingEffect = true;
	this.energyReduction = 10;
};

Virus.prototype = new Spell();

spellList.Spam_Email = function (){
	this.lastingEffect = true;
	this.energyReduction = 10;
	this.loseSpell = true; /////////////////this will be defined as "Enemy cant Use Spell for a turn"
};

Spam_Email.prototype = new Spell();

spellList.Intercom = function (){
	this.lastingEffect = true;
	this.skillAddition = 10;
};

Intercom.prototype = new Spell();

spellList.Wet_Floor = function () {
	this.lastingEffect = true;
	this.energyReduction = 10;
	this.experienceReduction = 10;
	this.skillReduction = 10;
};

Wet_Floor.prototype = new Spell();

///////////End of assigned spells///////////

spellList.Thermostat = function() {
	this.lastingEffect = true;
	this.energyReduction = 10;
	this.experienceReduction = 10;
	this.skillReduction = 10;
};


Thermostat.prototype = new Spell();

spellList.Microwave_Tuna = function (){
	this.energyReduction = 50;
	//////////To both players/////////
};

Microwave_Tuna.prototype = new Spell(); 

spellList.Meeting = function() {
	this.lastingEffect = true;
	this.energyReduction = 10;
	this.energyRestored = 10;
};


Meeting.prototype = new Spell();

spellList.Bonus = function () {
	this.lastingEffect = true;
	this.energyRestored = 25;
};


Meeting.prototype = new Spell();






module.exports=spellList;