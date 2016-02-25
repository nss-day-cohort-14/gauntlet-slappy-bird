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
    var weapons = {};

    return {
      weapons () {
        return weapons;
      },
      load () {

        return new Promise((resolve, reject) => {
          $.ajax({url: "./data/weapons.json"}).done((response) => {
            response.weapons.forEach((weapon) => {
              var currentWeapon;

              weapons[weapon.id] = Object.create(Weapon.prototype);
              currentWeapon = weapons[weapon.id];

              Object.keys(weapon).forEach((property) => {
                defineProperty(currentWeapon, property, weapon[property]);
              });
            });
            resolve(weapons);
          }).fail((xhr, error, msg) => {
            reject(msg);
          });
        });
   
      }
    }
  }();

  return g;
  
}(Gauntlet || {});
