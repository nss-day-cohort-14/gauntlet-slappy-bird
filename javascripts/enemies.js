AvailableEnemies = {
  randomEnemy: function() {
    var enemies = Object.keys(this).filter((k) => k !== "randomEnemy");
    var enemyInstance = enemies[Math.round(Math.random() * (enemies.length - 1))];
    return this[enemyInstance];
  }
};

var Orc = function() {
  this.species = "Orc";
  this.allowedClasses = ["Warrior", "Berserker", "Shaman", "Assassin"];
  this.health = this.health + 30;
};
Orc.prototype = new Monster();
AvailableEnemies.Orc = new Orc();


var Sith = function() {
  this.species = "Sith";
  this.skinColors.push("red", "blue", "golden", "thorny");
  this.allowedClasses = ["Lord"];
  this.health = this.health + 60;
};
Sith.prototype = new Monster();
AvailableEnemies.Sith = new Sith();


var Kobold = function() {
  this.species = "Kobold";
  this.health = this.health - 5;
  this.allowedClasses = ["Warrior", "Assassin"];
};
Kobold.prototype = new Monster();
AvailableEnemies.Kobold = new Kobold();


var Goblin = function() {
  this.species = "Goblin";
  this.health = this.health - 10;
  this.skinColors.push("green", "mottled gray");
  this.allowedClasses = ["Fighter", "Assassin", "Conjurer"];
};
Goblin.prototype = new Monster();
AvailableEnemies.Goblin = new Goblin();


var Skeleton = function() {
  this.species = "Skeleton";
  this.health = this.health - 10;
  this.skinColors = [];
  this.allowedClasses = ["Fighter"];
};
Skeleton.prototype = new Monster();
AvailableEnemies.Skeleton = new Skeleton();


var Ghoul = function() {
  this.species = "Ghoul";
  this.health = this.health + 10;
  this.skinColors.push("tattoo", "sickly white");
  this.allowedClasses = ["Assassin", "Shaman"];
};
Ghoul.prototype = new Monster();
AvailableEnemies.Ghoul = new Ghoul();
