 "use strict";
var weaponList={};

weaponList.Weapon=function(){
  this.handsUsed=1;
  this.power=10;
  this.accuracy=75;
};

weaponList.laserPointer=function(){
  this.power=5;
  this.accuracy=100;
};

module.exports=weaponList;
