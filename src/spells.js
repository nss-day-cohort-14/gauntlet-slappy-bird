
"use strict";
var spellList={};

spellList.Spell=function(){
  this.energyReduction=0;
  this.energyPercReduction=0;
  this.lastingEffect=false;
  this.targetsBoth=false;
  this.energyRestored=0;
  this.experienceReduction=0;
  this.skillReduction=0;
  this.energyPercRestored=0;
  this.skillAddition=0;
};

spellList.Coffee=function(){
  this.name="Coffee";
  this.energyRestored=50;
};
spellList.Coffee.prototype = new spellList.Spell();

spellList.Demotion = function(){
	this.name="Demotion";
	this.skillReduction = 25;
	this.energyReduction = 10;
};
spellList.Demotion.prototype = new spellList.Spell();

spellList.Severance = function(){
	this.name="Severance";
	this.experienceReduction = 25;
	this.energyReduction = 10;
};

spellList.Severance.prototype = new spellList.Spell();

spellList.BubbleWrap = function(){
	this.name="Bubble Wrap";
	this.energyPercRestored = 25;
};

spellList.BubbleWrap.prototype = new spellList.Spell();

spellList.Team_Building_Exercise = function(){
	this.name="Team Building Exercise";
	this.energyPercReduction = 25;
};

spellList.Team_Building_Exercise.prototype = new spellList.Spell();

spellList.Virus = function(){
	this.name="Virus";
	this.lastingEffect = true;
	this.energyReduction = 10;
};

spellList.Virus.prototype = new spellList.Spell();

spellList.Spam_Email = function (){
	this.name="Spam Email";
	this.energyPercReduction = 20;
};

spellList.Spam_Email.prototype = new spellList.Spell();

spellList.Intercom = function (){
	this.name="Intercom";
	
	this.skillAddition = 25;
};

spellList.Intercom.prototype = new spellList.Spell();

spellList.Wet_Floor = function () {
	this.name="Wet Floor";
	this.energyPercReduction = 10;
	this.experienceReduction = 10;
	this.skillReduction = 10;
};

spellList.Wet_Floor.prototype = new spellList.Spell();

///////////End of assigned spells///////////

spellList.Thermostat = function() {
	this.name="Thermostat";
	this.energyPercReduction = 10;
	this.experienceReduction = 10;
	this.skillReduction = 10;
};


spellList.Thermostat.prototype = new spellList.Spell();

spellList.Microwave_Tuna = function (){
	this.name="Microwave Tuna";
	this.energyReduction = 50;
	this.targetsBoth=true;
};

spellList.Microwave_Tuna.prototype = new spellList.Spell(); 

spellList.Meeting = function() {
	this.name="Meeting";
	this.energyReduction = 10;
	this.skillAddition = 10;
};


spellList.Meeting.prototype = new spellList.Spell();

spellList.Bonus = function () {
	this.name="Bonus";
	this.energyPercRestored = 25;
};


spellList.Bonus.prototype = new spellList.Spell();




module.exports=spellList;