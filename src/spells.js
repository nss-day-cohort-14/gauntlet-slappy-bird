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

module.exports=spellList;