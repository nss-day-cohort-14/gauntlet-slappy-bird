"use strict";

var Gauntlet = function (g) {
  var Weapon = Object.create(null);

  Weapon.prototype = {
    id: "nothing",
    label: "bare hands",
    base_damage: 1,
    hands: 2,
    ranged: false,
    poisoned: false
  };

  Weapon.prototype.toString = function() {
    return this.label;
  };

  g.WeaponRack = function () {
    var weaponList = {};

    return {
      weapons () {
        return weaponList;
      },
      load () {

        return new Promise((resolve, reject) => {
          $.ajax({url: "./data/weapons.json"}).done((response) => {
            response.weapons.forEach((weapon) => {
              var currentWeapon;

              weaponList[weapon.id] = Object.create(Weapon.prototype);
              currentWeapon = weaponList[weapon.id];

              Object.keys(weapon).forEach((property) => {
                defineProperty(currentWeapon, property, weapon[property]);
              });
            });
            resolve(weaponList);
          }).fail((xhr, error, msg) => {
            reject(msg);
          });
        });
   
      }
    }
  }();

  return g;
  
}(Gauntlet || {});




let Orc = function() {
  this.species = "Orc";
  this.allowedClasses = ["Warrior", "Berserker", "Shaman", "Assassin"];
  this.health = this.health + 30;
  this.intelligence -= 30;
};
Orc.prototype = new Monster();



let Sith = function() {
  this.species = "Sith";
  this.skinColors.push("red", "blue", "golden", "thorny");
  this.allowedClasses = ["Lord"];
  this.health += 60;
};
Sith.prototype = new Monster();



let Kobold = function() {
  this.species = "Kobold";
  this.health -= 15;
  this.allowedClasses = ["Warrior", "Assassin"];
};
Kobold.prototype = new Monster();



let Goblin = function() {
  this.species = "Goblin";
  this.health -= 20;
  this.skinColors.push("green", "mottled gray");
  this.allowedClasses = ["Warrior", "Assassin", "Conjurer"];
  this.intelligence -= 50;
};
Goblin.prototype = new Monster();



let Skeleton = function() {
  this.species = "Skeleton";
  this.health += 10;
  this.skinColors = [];
  this.allowedClasses = ["Warrior"];
};
Skeleton.prototype = new Monster();



let Ghoul = function() {
  this.species = "Ghoul";
  this.health += 10;
  this.skinColors.push("tattoo", "sickly white");
  this.allowedClasses = ["Assassin", "Shaman"];
  this.intelligence -= 50;
};
Ghoul.prototype = new Monster();


/*
  Create an object to hold an instance 
  of all possible enemies
 */
let AvailableEnemies = {
  randomEnemy: function() {
    console.log("Object.keys(this)", Object.keys(this));
    let enemies = Object.keys(this).filter((k) => k !== "randomEnemy");
    let enemyInstance = enemies[Math.round(Math.random() * (enemies.length - 1))];
    return new window[enemyInstance]();
  }
};


AvailableEnemies.Orc = new Orc();
AvailableEnemies.Sith = new Sith();
AvailableEnemies.Kobold = new Kobold();
AvailableEnemies.Goblin = new Goblin();
AvailableEnemies.Skeleton = new Skeleton();
AvailableEnemies.Ghoul = new Ghoul();



