"use strict";

var Gauntlet = function (gauntlet) {
  let _army = {};

  /*
    Define the base object for any player of Gauntlet,
    whether a human player or a monster.
   */
  _army.Player = Object.create(null);
  
  _army.Player.prototype = {
    species: null,
    profession: null,
    weapon: null,
    playerName: null,
    protection: 0,
    effects: [],

    health: 0,
    limbs: ["head", "neck", "arm", "leg", "torso"],
    skinColor: "",
    skinColors: ["gray"],
    strength: 90,
    intelligence: 90,
  };

  _army.Player.prototype.toString = function() {
    var output = [this.playerName,
      ": a ",
      this.skinColor,
      (this.skinColor) ? " skinned " : "",
      this.species,
      " ",
      this.profession,
      " with ",
      this.health,
      " health. ",
      (this.profession.magical) ? "I smell a mage" : " Wielding a " + this.weapon,
      "!"
    ].join("");
    return output;
  };

  _army.Player.prototype.equip = function (profession, weapon) {
    this.health = Math.floor(Math.random() * 200 + 150);

    // Compose a profession
    if (!profession) {
      this.generateClass();
    } else {
      this.setClass(profession);
    }

    // Use the stat modifiers for the species
    if (this.hasOwnProperty("healthModifier")) {
      this.modifyHealth(this.healthModifier);
      this.modifyStrength(this.strengthModifier);
      this.modifyIntelligence(this.intelligenceModifier);
    }

    // Compose a weapon
    if (!this.profession.magical) {
      if (!weapon) {
        this.generateWeapon();
      } else {
        this.setWeapon(weapon);
      }
    }

    this.setSkin();

  };

  _army.Player.prototype.modifyHealth = function(bonus) {
    this.health += bonus;
    if (this.health < 20) this.health = 20;
  };

  _army.Player.prototype.modifyStrength = function(bonus) {
    this.strength += bonus;
    if (this.strength < 10) this.strength = 10;
  };

  _army.Player.prototype.modifyIntelligence = function(bonus) {
    this.intelligence += bonus;
    if (this.intelligence < 10) this.intelligence = 10;
  };

  _army.Player.prototype.generateClass = function () {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClassName = this.allowedClasses[random];
    var randomClass = gauntlet.GuildHall.classes()[randomClassName];

    // Composes the corresponding player class into the player object
    this.setClass(randomClass);
  };

  _army.Player.prototype.setClass = function(newClass) {
    this.profession = newClass;

    this.modifyHealth(newClass.healthModifier);
    this.modifyStrength(newClass.strengthModifier);
    this.modifyIntelligence(newClass.intelligenceModifier);
  };

  _army.Player.prototype.generateWeapon = function() {

    try {
      if (this.profession && !this.profession.magical) {
        var random = Math.round(Math.random() * (this.profession.allowedWeapons.length - 1));
        var weapon = this.profession.allowedWeapons[random];
        this.setWeapon(gauntlet.WeaponRack.weapons()[weapon]);
      }
    } catch (ex) {
      console.log("this.profession", this.profession.toString());
      console.log("this.profession.allowedWeapons", this.profession.allowedWeapons);
    }
  }

  _army.Player.prototype.setWeapon = function(newWeapon) {
    this.weapon = newWeapon;
  };

  _army.Player.prototype.setSkin = function() {
    var randomSkin = Math.round(Math.random() * (this.skinColors.length-1));
    this.skinColor = this.skinColors[randomSkin];
  };


  /*
    Define the base properties for a human in a 
    constructor function.
   */
  _army.Human = Object.create(_army.Player.prototype);

  _army.Human.init = function (name) {
    this.species = "Human";
    this.playerName = name;
    this.intelligence = this.intelligence + 20;
    this.skinColors.push("brown", "red", "white", "disease");

    this.allowedClasses = ["Warrior", "Berserker", "Valkyrie", "Monk"];
    this.allowedClasses.push("Wizard", "Conjurer", "Sorcerer");
    this.allowedClasses.push("Thief", "Ninja");


    return this;
  };


  gauntlet.Army = function () {
    return {
      troops () {
        return _army;
      }
    }
  }();

  return gauntlet;
  
}(Gauntlet || {});














