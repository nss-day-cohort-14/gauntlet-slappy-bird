var Orc = function() {
  this.species = "Orc";
  this.allowedClasses = ["Warrior", "Berserker", "Shaman", "Assassin"];
  this.health = this.health + 20;
};
Orc.prototype = new Monster();

var Kobold = function() {
  this.species = "Kobold";
  this.allowedClasses = ["Warrior", "Assassin"];
};
Kobold.prototype = new Monster();

var Goblin = function() {
  this.species = "Goblin";
  this.allowedClasses = ["Fighter", "Assassin", "Conjurer"];
};
Goblin.prototype = new Monster();

