"use strict";
var spells = require("./spells");
var roleList={};

roleList.Employee=function(){
  this.name=null;
  this.energy=100;
  this.experience=100;
  this.skill=100;
  this.spell1=null;
  this.spell2=null;
  this.weapon=null;
};

roleList.Intern=function(){
  this.name= "Intern";
  this.spell1= spells.Coffee;
  this.src= "img/intern.png";

};

roleList.Intern.prototype = new roleList.Employee();


roleList.IT=function(){
  this.name="IT";
  this.energy=75;
  this.experience=175;
  this.skill=50;
  this.spell1= spells.Virus;
  this.src= "img/it.png";

};

roleList.IT.prototype = new roleList.Employee();



roleList.Sales=function(){
  this.name="Sales";
  this.energy=150;
  this.experience=75;
  this.skill=75;
  this.spell1= spells.Spam_Email;
  this.src = "img/sales.png";

};

roleList.Sales.prototype = new roleList.Employee();



roleList.HR=function(){
  this.name="HR";
  this.energy=75;
  this.experience=125;
  this.skill=100;
  this.spell1= spells.Team_Building_Exercise;
  this.src= "img/hr.png";

};

roleList.HR.prototype = new roleList.Employee();



roleList.Warehouse=function(){
  this.name="Warehouse";
  this.energy=75;
  this.experience=50;
  this.skill=175;
  this.spell1= spells.Bubblewrap;
  this.src= "img/warehouse.png";

};

roleList.Warehouse.prototype = new roleList.Employee();



roleList.Secretary=function(){
  this.name="Secretary";
  this.energy=250;
  this.experience=25;
  this.skill=25;
  this.spell1= spells.Intercom;
  this.src= "img/secretary.png";

};

roleList.Secretary.prototype = new roleList.Employee();



roleList.Janitor=function(){
  this.name="Janitor";
  this.energy=150;
  this.experience=150;
  this.skill=10;
  this.spell1= spells.Wet_Floor;
  this.src= "img/janitor.png";

};

roleList.Janitor.prototype = new roleList.Employee();



roleList.Manager=function(){
  this.name="Manager";
  this.energy=50;
  this.experience=125;
  this.skill=125;
  this.spell1= spells.Severance;
  this.src= "img/manager.png";

};

roleList.Manager.prototype = new roleList.Employee();


roleList.CEO=function(){
  this.name="CEO";
  this.energy=75;
  this.experience=150;
  this.skill=75;
  this.spell1= spells.Demotion;
  this.src= "img/ceo.png";

};

roleList.CEO.prototype = new roleList.Employee();



var testclass = new roleList.Warehouse();
// console.log("test", testclass);

module.exports=roleList;