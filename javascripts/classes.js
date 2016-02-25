"use strict";

var Gauntlet = function (g) {

  g.GuildHall = function () {
    var _classes = {};

    return {
      classes () {
        return classes;
      },
      load (callBack) {
        return new Promise((resolve, reject) => {
          $.ajax({url: "./data/classes.json"}).done((response) => {
            response.classes.forEach(($class) => {
              var currentClass;

              _classes[$class.id] = Object.create(eval($class.prototype));
              currentClass = _classes[$class.id];

              Object.keys($class).forEach((property) => {
                defineProperty(currentClass, property, $class[property]);
              });
            });

            resolve(_classes);
          }).fail((xhr, error, msg) => {
            console.error(msg);
          });
        });
      }
    }
  }();

  return g;
  
}(Gauntlet || {});





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
  this.healthBonus += 20;
  this.strengthBonus = 10;
  this.allowedWeapons = ["LongSword", "ShortSword", "BroadSword", "Dagger"];
};
Fighter.prototype = new PlayerClass();
AvailableClasses.Fighter = new Fighter();


var Warrior = function() {
  this.name = "Warrior";
  this.healthBonus += 50;
  this.strengthBonus += 90;
  this.allowedWeapons.push("Halberd");
};
Warrior.prototype = new Fighter();
AvailableClasses.Warrior = new Warrior();


var Valkyrie = function() {
  this.name = "Valkyrie";
  this.healthBonus += 20;
  this.allowedWeapons = ["LongSword", "ShortSword", "BroadSword", "Dagger", "BallChain", "LongBow"];
  this.strengthBonus += 70;
};
Valkyrie.prototype = new Fighter();
AvailableClasses.Valkyrie = new Valkyrie();


var Berserker = function() {
  this.name = "Berserker";
  this.allowedWeapons = ["LongSword", "ShortSword", "BroadSword", "Dagger", "Mace", "WarAxe"];
  this.strengthBonus += 120;
};
Berserker.prototype = new Fighter();
AvailableClasses.Berserker = new Berserker();


var Monk = function() {
  this.name = "Monk";
  this.healthBonus = this.healthBonus + 25;
  this.allowedWeapons = ["ShortBow", "Staff", "Nunchaku"];
  this.strengthBonus = this.strengthBonus + 100;
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
  this.healthBonus -= 60;
  this.strengthBonus -= 40;
  this.intelligenceBonus += 150;
};
Mage.prototype = new PlayerClass();


var Shaman = function() {
  this.name = "Shaman";
  this.healthBonus += 5;
  this.strengthBonus -= 10;
  this.intelligenceBonus += 80;
};
Shaman.prototype = new Mage();
AvailableClasses.Shaman = new Shaman();


var Wizard = function() {
  this.name = "Wizard";
  this.healthBonus -= 15;
  this.strengthBonus -= 25;
  this.intelligenceBonus += 100;
};
Wizard.prototype = new Mage();
AvailableClasses.Wizard = new Wizard();


var Conjurer = function() {
  this.name = "Conjurer";
  this.strengthBonus -= 10;
  this.intelligenceBonus += 90;
};
Conjurer.prototype = new Mage();
AvailableClasses.Conjurer = new Conjurer();


var Sorcerer = function() {
  this.name = "Sorcerer";
  this.healthBonus -= 5;
  this.strengthBonus -= 20;
  this.intelligenceBonus += 85;
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
  this.healthBonus -= 5;
  this.strengthBonus -= 10;
  this.intelligenceBonus += 20;
};
Stealth.prototype = new PlayerClass();

var Thief = function() {
  this.name = "Thief";
  this.healthBonus -= 5;
  this.strengthBonus -= 5;
  this.intelligenceBonus += 50;
  this.allowedWeapons = ["Dagger", "Dart", "Dirk", "ShortSword"];
};
Thief.prototype = new Stealth();
AvailableClasses.Thief = new Thief();


var Ninja = function() {
  this.name = "Ninja";
  this.healthBonus += 5;
  this.strengthBonus += 15;
  this.intelligenceBonus += 40;
  this.allowedWeapons = ["Dagger", "Dart", "Dirk", "ShortSword", "Rapier"];
};
Ninja.prototype = new Stealth();
AvailableClasses.Ninja = new Ninja();


var Assassin = function() {
  this.name = "Assassin";
  this.healthBonus -= 10;
  this.strengthBonus -= 5;
  this.intelligenceBonus += 100;
  this.allowedWeapons = ["Dagger", "Dart", "ShortSword", "PoisonBlowgun"];
};
Assassin.prototype = new Stealth();
AvailableClasses.Assassin = new Assassin();


var Lord = function() {
  this.name = "Lord";
  this.intelligenceBonus += 20;
  this.allowedWeapons = ["LightSaber"];
};
Lord.prototype = new PlayerClass();
AvailableClasses.Lord = new Lord();


