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

