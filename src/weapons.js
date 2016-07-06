 "use strict";
var weaponList={};

weaponList.Weapon=function(){     //our main constructor function (top of the chain)
  this.handsUsed=1;
  this.power=10;
  this.accuracy=75;
};

///////////////////////////// SINGLE HANDED WEAPONS //////////////////////////////
weaponList.laserPointer=function(){
  this.name="Laser Pointer";
  this.power=5;
  this.accuracy=100;
};
weaponList.laserPointer.prototype = new weaponList.Weapon();
// console.log("weaponList.laserPointer",weaponList.laserPointer);

weaponList.febrezeGrenade=function(){
  this.name="Febreze Grenade";
  this.power=5;
  this.accuracy=100;
};
weaponList.febrezeGrenade.prototype = new weaponList.Weapon();
// console.log("weaponList.febrezeGrenade",weaponList.febrezeGrenade);

weaponList.mouse=function(){
  this.name="mouse";
  this.power=6;
  this.accuracy=95;
};
weaponList.mouse.prototype = new weaponList.Weapon();
// console.log("weaponList.mouse",weaponList.mouse);

weaponList.stapler=function(){
  this.name="Stapler";
  this.power=10;
  this.accuracy=50;
};
weaponList.stapler.prototype = new weaponList.Weapon();
// console.log("weaponList.stapler",weaponList.stapler);

weaponList.coffeePot=function(){
  this.name="Coffee Pot";
  this.power=12;
  this.accuracy=45;
};
weaponList.coffeePot.prototype = new weaponList.Weapon();
// console.log("weaponList.coffeePot",weaponList.coffeePot);

weaponList.paperWeight=function(){
  this.name="Paper Weight";
  this.power=15;
  this.accuracy=30;
};
weaponList.paperWeight.prototype = new weaponList.Weapon();
// console.log("weaponList.paperWeight",weaponList.paperWeight);

weaponList.tapeGun=function(){
  this.name="Tape Gun";
  this.power= Math.floor(Math.random() * 50);           //our power range from 1-50
  this.accuracy= Math.floor(Math.random() * 100);       //our accuracy range from 1-100
};
weaponList.tapeGun.prototype = new weaponList.Weapon();
// console.log("weaponList.tapeGun",weaponList.tapeGun);


/////////////////////////////// TWO HANDED WEAPONS ///////////////////////////////
weaponList.rubberBand=function(){
  this.name="Rubber Band";
  this.handsUsed=2;
  this.power=15;
  this.accuracy=90;
};
weaponList.rubberBand.prototype = new weaponList.Weapon();
// console.log("weaponList.rubberBand",weaponList.rubberBand);

weaponList.printerToner=function(){
  this.name="Printer Toner";
  this.handsUsed=2;
  this.power=17;
  this.accuracy=75;
};
weaponList.printerToner.prototype = new weaponList.Weapon();
// console.log("weaponList.printerToner",weaponList.printerToner);

weaponList.keyboard=function(){
  this.name="Keyboard";
  this.handsUsed=2;
  this.power=17;
  this.accuracy=85;
};
weaponList.keyboard.prototype = new weaponList.Weapon();
// console.log("weaponList.keyboard",weaponList.keyboard);

weaponList.faxMachine=function(){
  this.name="Fax Machine";
  this.handsUsed=2;
  this.power=20;
  this.accuracy=70;
};
weaponList.faxMachine.prototype = new weaponList.Weapon();
// console.log("weaponList.faxMachine",weaponList.faxMachine);

weaponList.shredder=function(){
  this.name="Shredder";
  this.handsUsed=2;
  this.power=25;
  this.accuracy=60;
};
weaponList.shredder.prototype = new weaponList.Weapon();
// console.log("weaponList.shredder",weaponList.shredder);


module.exports=weaponList;    // for Browserify-ication
