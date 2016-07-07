 "use strict";
var weaponList={};

weaponList.Weapon=function(){     //our main constructor function (top of the chain)
  this.handsUsed=1;
  this.power=10;
  this.accuracy=75;
};

///////////////////////////// SINGLE HANDED WEAPONS //////////////////////////////
weaponList.LaserPointer=function(){
  this.name="Laser Pointer";
  this.power=5;
  this.accuracy=100;
};
weaponList.LaserPointer.prototype = new weaponList.Weapon();
// console.log("weaponList.LaserPointer",weaponList.LaserPointer);

weaponList.FebrezeGrenade=function(){
  this.name="Febreze Grenade";
  this.power=5;
  this.accuracy=100;
};
weaponList.FebrezeGrenade.prototype = new weaponList.Weapon();
// console.log("weaponList.FebrezeGrenade",weaponList.FebrezeGrenade);

weaponList.Mouse=function(){
  this.name="Mouse";
  this.power=6;
  this.accuracy=95;
};
weaponList.Mouse.prototype = new weaponList.Weapon();
// console.log("weaponList.Mouse",weaponList.Mouse);

weaponList.Stapler=function(){
  this.name="Stapler";
  this.power=10;
  this.accuracy=100;
};
weaponList.Stapler.prototype = new weaponList.Weapon();
// console.log("weaponList.Stapler",weaponList.Stapler);

weaponList.CoffeePot=function(){
  this.name="Coffee Pot";
  this.power=12;
  this.accuracy=45;
};
weaponList.CoffeePot.prototype = new weaponList.Weapon();
// console.log("weaponList.CoffeePot",weaponList.CoffeePot);

weaponList.PaperWeight=function(){
  this.name="Paper Weight";
  this.power=15;
  this.accuracy=30;
};
weaponList.PaperWeight.prototype = new weaponList.Weapon();
// console.log("weaponList.PaperWeight",weaponList.PaperWeight);

weaponList.TapeGun=function(){
  this.name="Tape Gun";
  this.power= Math.floor(Math.random() * 50);           //our power range from 1-50
  this.accuracy= Math.floor(Math.random() * 100);       //our accuracy range from 1-100
};
weaponList.TapeGun.prototype = new weaponList.Weapon();
// console.log("weaponList.TapeGun",weaponList.TapeGun);


/////////////////////////////// TWO HANDED WEAPONS ///////////////////////////////
weaponList.RubberBand=function(){
  this.name="Rubber Band";
  this.handsUsed=2;
  this.power=15;
  this.accuracy=90;
};
weaponList.RubberBand.prototype = new weaponList.Weapon();
// console.log("weaponList.RubberBand",weaponList.RubberBand);

weaponList.PrinterToner=function(){
  this.name="Printer Toner";
  this.handsUsed=2;
  this.power=17;
  this.accuracy=75;
};
weaponList.PrinterToner.prototype = new weaponList.Weapon();
// console.log("weaponList.PrinterToner",weaponList.PrinterToner);

weaponList.Keyboard=function(){
  this.name="Keyboard";
  this.handsUsed=2;
  this.power=17;
  this.accuracy=85;
};
weaponList.Keyboard.prototype = new weaponList.Weapon();
// console.log("weaponList.Keyboard",weaponList.Keyboard);

weaponList.FaxMachine=function(){
  this.name="Fax Machine";
  this.handsUsed=2;
  this.power=20;
  this.accuracy=70;
};
weaponList.FaxMachine.prototype = new weaponList.Weapon();
// console.log("weaponList.FaxMachine",weaponList.FaxMachine);

weaponList.Shredder=function(){
  this.name="Shredder";
  this.handsUsed=2;
  this.power=25;
  this.accuracy=60;
};
weaponList.Shredder.prototype = new weaponList.Weapon();
// console.log("weaponList.Shredder",weaponList.Shredder);


module.exports=weaponList;    // for Browserify-ication
