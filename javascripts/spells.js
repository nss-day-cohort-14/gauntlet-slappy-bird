/*
  Base spell function that defines name, damage, damage type
 */
var Spell = function() {
  this.name = "";
  this.damage = 0;

  this.elements = ["lightning", "fire", "water", "earth", "mysticism"];
  this.type = "";
};

Spell.prototype.toString = function() {
  return this.name;
};

Spell.prototype.cast = function() {
  var random = Math.round(Math.random() * (this.elements.length - 1));
  this.type = this.elements[random];
  return {name: this.name, type: this.type, damage: this.damage};
};

/*
  An elemental sphere that can be cast by a magical class
 */
var Sphere = function() {
  this.name = "sphere";
  this.damage = Math.floor(Math.random() * 3 + 7);
};
Sphere.prototype = new Spell();

var Missile = function() {
  this.name = "magical missile";
  this.damage = Math.floor(Math.random() * 5 + 3);
};
Missile.prototype = new Spell();

var Hammer = function() {
  this.name = "giant hammer";
  this.damage = Math.floor(Math.random() * 8 + 4);
};
Hammer.prototype = new Spell();

