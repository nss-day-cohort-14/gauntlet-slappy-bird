/*
  Define the base object for any player of Gauntlet,
  whether a human player or a monster.
 */
var Player = function(name) {
  this.species = null;
  this.class = null;
  this.weapon = null;

  this.playerName = name || "unknown adventurer";
  this.health = Math.floor(Math.random() * 40 + 50);
  this.limbs = ["head", "neck", "arm", "leg", "torso"];
  this.skinColor = "gray";
  this.skinColors = [this.skinColor];
  this.strength = 90;
  this.intelligence = 90;
};

Player.prototype.toString = function() {
  var output = [this.playerName,
    ": a ",
    this.skinColor,
    (this.skinColor) ? " skinned " : "",
    this.species,
    " ",
    this.class,
    " with ",
    this.health,
    " health. ",
    (this.class.magical) ? "Able to cast " : " Wielding a ",
    this.weapon,
    "!"
  ].join("");
  return output;
};

Player.prototype.init = function(profession, weapon) {
  if (!profession) {
    this.generateClass();
  } else {
    this.setClass(profession);
  }

  if (!weapon) {
    this.generateWeapon();
  } else {
    this.setWeapon(weapon);
  }

  this.setSkin();
};

Player.prototype.modifyHealth = function(bonus) {
  this.health += bonus;
  if (this.health < 20) this.health = 20;
}

Player.prototype.generateClass = function() {
  // Get a random index from the allowed classes array
  var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

  // Get the string at the index
  var randomClass = this.allowedClasses[random];

  // Composes the corresponding player class into the player object
  this.setClass(new window[randomClass]());
};

Player.prototype.setClass = function(newClass) {
  this.class = newClass;
  this.modifyHealth(newClass.healthBonus);
};

Player.prototype.generateWeapon = function() {
  if (this.class && !this.class.magical) {
    var random = Math.round(Math.random() * (this.class.allowedWeapons.length - 1));
    var weapon = this.class.allowedWeapons[random];
    this.setWeapon(new window[weapon]());
  }
}

Player.prototype.setWeapon = function(newWeapon) {
  console.log("this.class.allowedWeapons",this.class.allowedWeapons);
  this.weapon = newWeapon;
};

Player.prototype.setSkin = function() {
  var randomSkin = Math.round(Math.random() * (this.skinColors.length-1));
  this.skinColor = this.skinColors[randomSkin];
};


/*
  Define the base properties for a human in a 
  constructor function.
 */
var Human = function() {
  this.species = "Human";
  this.intelligence = this.intelligence + 20;
  this.skinColors.push("brown", "red", "white", "disease");

  /*
    Define the classes allowed for Humans
   */
  this.allowedClasses = ["Warrior", "Berserker", "Valkyrie", "Monk"];
  this.allowedClasses.push("Mage", "Wizard", "Conjurer");
  this.allowedClasses.push("Thief", "Ninja");
};
Human.prototype = new Player();


/*
  Define the base properties for a monster in a 
  constructor function.
 */
var Monster = function() {
  this.health = this.health - 30;
  this.intelligence = this.intelligence -20;
  this.strength = this.strength + 30;
};

Monster.prototype = new Player();

