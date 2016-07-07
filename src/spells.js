"use strict";
var spellList={};

spellList.Spell=function(){
  this.power=10;
  this.lastingEffect=false;
  this.energyRestored=0;
};

spellList.Coffee=function(){
	this.name="Coffee";
  this.power=0;
  this.energyRestored=50;
};
spellList.Coffee.prototype = new spellList.Spell();

spellList.Demotion = function(){
	this.name="Demotion";
	this.lastingEffect = true;
	this.skillReduction = 25;
	this.energyReduction = 10;
};
spellList.Demotion.prototype = new spellList.Spell();

spellList.Severence = function(){
	this.name="Severence";
	this.lastingEffect = true;
	this.experienceReduction = 25;
	this.energyReduction = 10;
};

spellList.Severence.prototype = new spellList.Spell();

spellList.BubbleWrap = function(){
	this.name="Bubble Wrap";
	this.lastingEffect = true;
	this.energyRestored = 10;
};

spellList.BubbleWrap.prototype = new spellList.Spell();

spellList.Team_Building_Excercise = function(){
	this.name="Team Building Exercise";
	this.lastingEffect = true;
	this.energyReduction = 25;
};

spellList.Team_Building_Excercise.prototype = new spellList.Spell();

spellList.Virus = function(){
	this.name="Virus";
	this.lastingEffect = true;
	this.energyReduction = 10;
};

spellList.Virus.prototype = new spellList.Spell();

spellList.Spam_Email = function (){
	this.name="Spam Email";
	this.lastingEffect = true;
	this.energyReduction = 10;
	this.loseSpell = true; /////////////////this will be defined as "Enemy cant Use Spell for a turn"
};

spellList.Spam_Email.prototype = new spellList.Spell();

spellList.Intercom = function (){
	this.name="Intercom";
	this.lastingEffect = true;
	this.skillAddition = 10;
};

spellList.Intercom.prototype = new spellList.Spell();

spellList.Wet_Floor = function () {
	this.name="Wet Floor";
	this.lastingEffect = true;
	this.energyReduction = 10;
	this.experienceReduction = 10;
	this.skillReduction = 10;
};

spellList.Wet_Floor.prototype = new spellList.Spell();

///////////End of assigned spells///////////

spellList.Thermostat = function() {
	this.name="Thermostat";
	this.lastingEffect = true;
	this.energyReduction = 10;
	this.experienceReduction = 10;
	this.skillReduction = 10;
};


spellList.Thermostat.prototype = new spellList.Spell();

spellList.Microwave_Tuna = function (){
	this.name="Microwave Tuna";
	this.energyReduction = 50;
	//////////To both players/////////
};

spellList.Microwave_Tuna.prototype = new spellList.Spell(); 

spellList.Meeting = function() {
	this.name="Meeting";
	this.lastingEffect = true;
	this.energyReduction = 10;
	this.skillRestored = 10;
};


spellList.Meeting.prototype = new spellList.Spell();

spellList.Bonus = function () {
	this.name="Bonus";
	this.energyRestored = 25;
};


spellList.Meeting.prototype = new spellList.Spell();




module.exports=spellList;