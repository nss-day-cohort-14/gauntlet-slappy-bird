"use strict";
var spells = require("./spells");
var roleList={};

roleList.Employee=function(){
  this.energy=100;
  this.experience=100;
  this.skill=100;
  this.spell1=null;
  this.spell2=null;

};

roleList.Intern=function(){
  this.spell1= spells.Coffee;
  this.energy=100;
  
};
roleList.Intern.prototype = new roleList.Employee();


var testclass = new roleList.Intern();
console.log(testclass);

module.exports=roleList;