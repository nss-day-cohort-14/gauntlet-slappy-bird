/*
  One object to store a single instance of each class. When
  assigning a class to a combatant, use the keys on this object
  instead of creating new instances every time.
 */
var AvailableClasses = {};

/*
  Base function for a player, or enemy, class (profession)
 */
var PlayerClass = function() {
  this.name = "Apprentice";
  this.healthBonus = 0;
  this.strengthBonus = 0;
  this.intelligenceBonus = 0;
  this.magical = false;

};

PlayerClass.prototype.toString = function() {
  return this.name;
};

/*
    FIGHTER CLASSES
      - Warrior
      - Valkyrie
      - Berserker
      - Monk
 */
var Fighter = function() {
  this.name = "Fighter";
  this.healthBonus = this.healthBonus + 20;
  this.strengthBonus = 10;
  this.allowedWeapons = ["LongSword", "ShortSword", "BroadSword", "Dagger"];
};
Fighter.prototype = new PlayerClass();
AvailableClasses.Fighter = new Fighter();


var Warrior = function() {
  this.name = "Warrior";
  this.healthBonus = this.healthBonus + 25;
  this.allowedWeapons.push("Halberd");
  this.strengthBonus = this.strengthBonus + 30;
};
Warrior.prototype = new Fighter();
AvailableClasses.Warrior = new Warrior();


var Valkyrie = function() {
  this.name = "Valkyrie";
  this.healthBonus = this.healthBonus + 20;
  this.allowedWeapons.push("BallChain", "LongBow");
  this.strengthBonus = this.strengthBonus + 10;
};
Valkyrie.prototype = new Fighter();
AvailableClasses.Valkyrie = new Valkyrie();


var Berserker = function() {
  this.name = "Berserker";
  this.healthBonus = this.healthBonus + 35;
  this.allowedWeapons.unshift("Mace", "WarAxe");
  this.strengthBonus = this.strengthBonus + 20;
};
Berserker.prototype = new Fighter();
AvailableClasses.Berserker = new Berserker();


var Monk = function() {
  this.name = "Monk";
  this.healthBonus = this.healthBonus + 10;
  this.allowedWeapons = ["ShortBow", "Staff", "Nunchaku"];
  this.strengthBonus = this.strengthBonus + 40;
};
Monk.prototype = new Fighter();
AvailableClasses.Monk = new Monk();


/*
    MAGICAL CLASSES
      - Shaman
      - Wizard
      - Conujurer
      - Sorcerer
 */
var Mage = function() {
  this.name = "Mage";
  this.magical = true;
  this.healthBonus = this.healthBonus - 40;
  this.strengthBonus = this.strengthBonus - 40;
  this.intelligenceBonus = this.intelligenceBonus + 150;
};
Mage.prototype = new PlayerClass();


var Shaman = function() {
  this.name = "Shaman";
  this.healthBonus = this.healthBonus + 5;
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 80;
};
Shaman.prototype = new Mage();
AvailableClasses.Shaman = new Shaman();


var Wizard = function() {
  this.name = "Wizard";
  this.healthBonus = this.healthBonus - 15;
  this.strengthBonus = this.strengthBonus - 25;
  this.intelligenceBonus = this.intelligenceBonus + 100;
};
Wizard.prototype = new Mage();
AvailableClasses.Wizard = new Wizard();


var Conjurer = function() {
  this.name = "Conjurer";
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 90;
};
Conjurer.prototype = new Mage();
AvailableClasses.Conjurer = new Conjurer();


var Sorcerer = function() {
  this.name = "Sorcerer";
  this.healthBonus = this.healthBonus - 5;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 30;
};
Sorcerer.prototype = new Mage();
AvailableClasses.Sorcerer = new Sorcerer();


/*
    STEALTH CLASSES
      - Thief
      - Ninja
      - Assassin
 */
var Stealth = function() {
  this.name = "Stealth";
  this.healthBonus = this.healthBonus - 5;
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 20;
  this.allowedWeapons = ["Dagger", "Dart", "Dirk", "ShortSword"];
};
Stealth.prototype = new PlayerClass();

var Thief = function() {
  this.name = "Thief";
  this.healthBonus = this.healthBonus - 5;
  this.strengthBonus = this.strengthBonus - 5;
  this.intelligenceBonus = this.intelligenceBonus + 10;
};
Thief.prototype = new Stealth();
AvailableClasses.Thief = new Thief();


var Ninja = function() {
  this.name = "Ninja";
  this.healthBonus = this.healthBonus + 5;
  this.strengthBonus = this.strengthBonus + 15;

  this.allowedWeapons.push("Rapier");
};
Ninja.prototype = new Stealth();
AvailableClasses.Ninja = new Ninja();


var Assassin = function() {
  this.name = "Assassin";
  this.healthBonus = this.healthBonus - 10;
  this.strengthBonus = this.strengthBonus - 5;
  this.intelligenceBonus = this.intelligenceBonus + 30;

  this.allowedWeapons.push("PoisonBlowgun");
};
Assassin.prototype = new Stealth();
AvailableClasses.Assassin = new Assassin();


var Lord = function() {
  this.name = "Lord";
  this.intelligenceBonus = this.intelligenceBonus + 40;

  this.allowedWeapons = ["LightSaber"];
};
Lord.prototype = new PlayerClass();
AvailableClasses.Lord = new Lord();


