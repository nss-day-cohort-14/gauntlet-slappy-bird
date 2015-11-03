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
};
Weakness.prototype = new Spell();

var Feeblemind = function() {
  this.name = "feeblemind";
  this.debuff = true;
  this.effect = { trait: "intelligence", amount: Math.floor(Math.random() * 10 + 5) };
};
Feeblemind.prototype = new Spell();



/*
  Protection spells
 */
var Shield = function() {
  this.name = "shield";
  this.defensive = true
  this.protection = Math.floor(Math.random() * 6 + 4);
};
Shield.prototype = new Spell();

var Wall = function() {
  this.name = "wall";
  this.defensive = true
  this.protection = Math.floor(Math.random() * 8 + 12);
};
Wall.prototype = new Spell();



/*
  Damaging spells
 */
var MagicDart = function() {
  this.name = "mighty dart";
  this.damage = Math.floor(Math.random() * 2 + 2);
};
MagicDart.prototype = new Spell();

var Missile = function() {
  this.name = "magical missile";
  this.damage = Math.floor(Math.random() * 5 + 3);
};
Missile.prototype = new Spell();

var Sphere = function() {
  this.name = "rolling sphere";
  this.damage = Math.floor(Math.random() * 3 + 7);
};
Sphere.prototype = new Spell();

var Hammer = function() {
  this.name = "giant hammer";
  this.damage = Math.floor(Math.random() * 8 + 4);
};
Hammer.prototype = new Spell();

var Bolt = function() {
  this.name = "jagged bolt";
  this.damage = Math.floor(Math.random() * 7 + 6);
};
Bolt.prototype = new Spell();

