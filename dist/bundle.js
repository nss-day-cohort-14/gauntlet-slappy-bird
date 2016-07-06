(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
const Weapons= require("./weapons");
const Spells= require("./spells");
const Roles= require("./classes");
const Players= require("./player");
const Calculations = require("./calculations");
},{"./calculations":2,"./classes":3,"./player":4,"./spells":5,"./weapons":6}],2:[function(require,module,exports){
"use strict";
//all damage will be calculated here
},{}],3:[function(require,module,exports){
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

};
roleList.Intern.prototype = new roleList.Employee();


var testclass = new roleList.Intern();
console.log(testclass);

module.exports=roleList;
},{"./spells":5}],4:[function(require,module,exports){
"use strict";
//weapons and second spell will be set here


},{}],5:[function(require,module,exports){
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
},{}],6:[function(require,module,exports){
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

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map
