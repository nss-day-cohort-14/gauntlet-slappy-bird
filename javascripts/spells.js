var AvailableSpells = ["Sphere", "Bolt", "Hammer", "Missile", "MagicDart", "Shield", "Wall", "Weakness", "Feeblemind"];

/*
  Base spell function that defines name, damage, damage type
 */
var Spell = function() {
  this.name = "";
  this.damage = 0;
  this.defensive = false;
  this.debuff = false;

  this.elements = ["lightning", "fire", "water", "earth", "mysticism"];
  this.damageType = "";

  // console.log("Spell constructor function");
};

Spell.prototype.toString = function() {
  return this.name + " of " + this.damageType;
};

Spell.prototype.cast = function() {
  var random = Math.round(Math.random() * (this.elements.length - 1));
  this.damageType = this.elements[random];
  return {name: this.name, damageType: this.damageType, damage: this.damage};
};

/*
  Debuffing spells
 */
var Weakness = function() {
  this.name = "weakness";
  this.debuff = true;
  this.effect = { trait: "strength", amount: Math.floor(Math.random() * 5 + 5) };
  // console.log("Weakness constructor function");
};
// console.log("");
// console.log("Weakness set Spell as prototype");
Weakness.prototype = new Spell();

var Feeblemind = function() {
  this.name = "feeblemind";
  this.debuff = true;
  this.effect = { trait: "intelligence", amount: Math.floor(Math.random() * 10 + 5) };
  // console.log("Feeblemind constructor function");
};
// console.log("");
// console.log("Feeblemind set Spell as prototype");
Feeblemind.prototype = new Spell();



/*
  Protection spells
 */
var Shield = function() {
  this.name = "shield";
  this.defensive = true
  this.protection = Math.floor(Math.random() * 6 + 4);
  // console.log("Shield constructor function");
};
// console.log("");
// console.log("Shield set Spell as prototype");
Shield.prototype = new Spell();

var Wall = function() {
  this.name = "wall";
  this.defensive = true
  this.protection = Math.floor(Math.random() * 8 + 12);
  // console.log("Wall constructor function");
};
// console.log("");
// console.log("Wall set Spell as prototype");
Wall.prototype = new Spell();



/*
  Damaging spells
 */
var MagicDart = function() {
  this.name = "mighty dart";
  this.damage = Math.floor(Math.random() * 2 + 2);
  // console.log("MagicDart constructor function");
};
// console.log("");
// console.log("MagicDart set Spell as prototype");
MagicDart.prototype = new Spell();

var Missile = function() {
  this.name = "magical missile";
  this.damage = Math.floor(Math.random() * 5 + 3);
  // console.log("Missile constructor function");
};
// console.log("");
// console.log("Missile set Spell as prototype");
Missile.prototype = new Spell();

var Sphere = function() {
  this.name = "rolling sphere";
  this.damage = Math.floor(Math.random() * 3 + 7);
  // console.log("Sphere constructor function");
};
// console.log("");
// console.log("Sphere set Spell as prototype");
Sphere.prototype = new Spell();

var Hammer = function() {
  this.name = "giant hammer";
  this.damage = Math.floor(Math.random() * 8 + 4);
  // console.log("Hammer constructor function");
};
// console.log("");
// console.log("Hammer set Spell as prototype");
Hammer.prototype = new Spell();

var Bolt = function() {
  this.name = "jagged bolt";
  this.damage = Math.floor(Math.random() * 7 + 6);
  // console.log("Bolt constructor function");
};
// console.log("");
// console.log("Bolt set Spell as prototype");
Bolt.prototype = new Spell();

