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
  return {name: this.name, type: this.type, damage: this.damage};
};

/*
  An elemental sphere that can be cast by a magical class
 */
var Sphere = function() {
  this.name = "sphere";
  this.damage = Math.floor(Math.random() * 10 + 10);

  var random = Math.round(Math.random() * (this.elements.length - 1));
  this.type = this.elements[random];
};
Sphere.prototype = new Spell();
