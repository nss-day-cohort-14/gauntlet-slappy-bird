var Orc = function() {
  this.species = "Orc";
  this.allowedClasses = ["Warrior", "Berserker", "Shaman", "Assassin"];
  this.health = this.health + 30;
};
Orc.prototype = new Monster();

var Sith = function() {
  this.species = "Sith";
  this.skinColors.push("red", "blue", "golden", "thorny");
  this.allowedClasses = ["Lord"];
  this.health = this.health + 60;
};
Sith.prototype = new Monster();

var Kobold = function() {
  this.species = "Kobold";
  this.health = this.health - 5;
  this.allowedClasses = ["Warrior", "Assassin"];
};
Kobold.prototype = new Monster();

var Goblin = function() {
  this.species = "Goblin";
  this.health = this.health - 10;
  this.skinColors.push("green", "mottled gray");
  this.allowedClasses = ["Fighter", "Assassin", "Conjurer"];
};
Goblin.prototype = new Monster();

var Skeleton = function() {
  this.species = "Skeleton";
  this.health = this.health - 10;
  this.skinColors = [];
  this.allowedClasses = ["Fighter"];
};
Skeleton.prototype = new Monster();

var Ghoul = function() {
  this.species = "Ghoul";
  this.health = this.health + 10;
  this.skinColors.push("tattoo", "sickly white");
  this.allowedClasses = ["Assassin", "Shaman"];
};
Ghoul.prototype = new Monster();

