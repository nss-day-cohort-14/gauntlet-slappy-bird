var Orc = function() {
  this.species = "Orc";
  this.allowedClasses = ["Warrior", "Berserker", "Shaman", "Assassin"];
  this.health = this.health + 30;
  this.intelligence -= 30;

  console.log("Orc constructor function");
};
console.log("");
console.log("Setting prototype for Orc");
Orc.prototype = new Monster();



var Sith = function() {
  this.species = "Sith";
  this.skinColors.push("red", "blue", "golden", "thorny");
  this.allowedClasses = ["Lord"];
  this.health += 60;
  console.log("Sith constructor function");
};
console.log("");
console.log("Setting prototype for Sith");
Sith.prototype = new Monster();



var Kobold = function() {
  this.species = "Kobold";
  this.health -= 15;
  this.allowedClasses = ["Warrior", "Assassin"];
  console.log("Kobold constructor function");
};
console.log("");
console.log("Setting prototype for Kobold");
Kobold.prototype = new Monster();



var Goblin = function() {
  this.species = "Goblin";
  this.health -= 20;
  this.skinColors.push("green", "mottled gray");
  this.allowedClasses = ["Fighter", "Assassin", "Conjurer"];
  this.intelligence -= 50;
  console.log("Goblin constructor function");
};
console.log("");
console.log("Setting prototype for Goblin");
Goblin.prototype = new Monster();



var Skeleton = function() {
  this.species = "Skeleton";
  this.health += 10;
  this.skinColors = [];
  this.allowedClasses = ["Fighter"];
  console.log("Skeleton constructor function");
};
console.log("");
console.log("Setting prototype for Skeleton");
Skeleton.prototype = new Monster();



var Ghoul = function() {
  this.species = "Ghoul";
  this.health += 10;
  this.skinColors.push("tattoo", "sickly white");
  this.allowedClasses = ["Assassin", "Shaman"];
  this.intelligence -= 50;
  console.log("Ghoul constructor function");
};
console.log("");
console.log("Setting prototype for Ghoul");
Ghoul.prototype = new Monster();


/*
  Create an object to hold an instance 
  of all possible enemies
 */
AvailableEnemies = {
  randomEnemy: function() {
    var enemies = Object.keys(this).filter((k) => k !== "randomEnemy");
    var enemyInstance = enemies[Math.round(Math.random() * (enemies.length - 1))];
    return new window[enemyInstance]();
  }
};


AvailableEnemies.Orc = new Orc();
AvailableEnemies.Sith = new Sith();
AvailableEnemies.Kobold = new Kobold();
AvailableEnemies.Goblin = new Goblin();
AvailableEnemies.Skeleton = new Skeleton();
AvailableEnemies.Ghoul = new Ghoul();



