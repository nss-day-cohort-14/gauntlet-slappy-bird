var Weapon = function() {
  this.name = "bare hands";
  this.damage = 1;
  this.hands = 2;
  this.ranged = false;
  this.poisoned = false;

  console.log("Weapon constructor function");

};
Weapon.prototype.toString = function() {
  return this.name;
}

var Dart = function() {
  this.name = "dart";
  this.damage = 3;
  this.hands = 1;
  this.ranged = true;
};
console.log("");
console.log("Dart set prototype");
Dart.prototype = new Weapon();

var Dagger = function() {
  this.name = "dagger";
  this.damage = 4;
  this.hands = 1;
};

console.log("");
console.log("Dart set prototype");
Dagger.prototype = new Weapon();

var Dirk = function() {
  this.name = "dirk";
  this.damage = 5;
  this.hands = 1;
};
console.log("");
console.log("Dart set prototype");
Dirk.prototype = new Weapon();

var ShortSword = function() {
  this.name = "short sword";
  this.damage = 6;
  this.hands = 1;
};
console.log("");
console.log("ShortSword set prototype");
ShortSword.prototype = new Weapon();

var Mace = function() {
  this.name = "mace";
  this.damage = 6;
  this.hands = 1;
};
console.log("");
console.log("Mace set prototype");
Mace.prototype = new Weapon();

var BallChain = function() {
  this.name = "ball and chain";
  this.damage = 8;
  this.hands = 1;
};
console.log("");
console.log("Dart set prototype");
BallChain.prototype = new Weapon();

var LongSword = function() {
  this.name = "long sword";
  this.damage = 8;
  this.hands = 2;
};
console.log("");
console.log("Dart set prototype");
LongSword.prototype = new Weapon();

var Rapier = function() {
  this.name = "rapier";
  this.damage = 8;
  this.hands = 1;
};
console.log("");
console.log("Dart set prototype");
Rapier.prototype = new Weapon();

var PoisonBlowgun = function() {
  this.name = "poison blowgun";
  this.damage = 4;
  this.hands = 1;
  this.poisoned = true;
  this.ranged = true;
};
console.log("");
console.log("Dart set prototype");
PoisonBlowgun.prototype = new Weapon();

var BroadSword = function() {
  this.name = "broad sword";
  this.damage = 8;
  this.hands = 2;
};
console.log("");
console.log("Dart set prototype");
BroadSword.prototype = new Weapon();

var WarAxe = function() {
  this.name = "war axe";
  this.damage = 10;
  this.hands = 2;
};
console.log("");
console.log("Dart set prototype");
WarAxe.prototype = new Weapon();

var Halberd = function() {
  this.name = "halberd";
  this.damage = 12;
  this.hands = 2;
};
console.log("");
console.log("Dart set prototype");
Halberd.prototype = new Weapon();

var LongBow = function() {
  this.name = "long bow";
  this.damage = 8;
  this.hands = 2;
  this.ranged = true;
};
console.log("");
console.log("Dart set prototype");
LongBow.prototype = new Weapon();

var Staff = function() {
  this.name = "staff";
  this.damage = 6;
  this.hands = 2;
};
console.log("");
console.log("Dart set prototype");
Staff.prototype = new Weapon();

var ShortBow = function() {
  this.name = "short bow";
  this.damage = 6;
  this.hands = 2;
  this.ranged = true;
};
console.log("");
console.log("Dart set prototype");
ShortBow.prototype = new Weapon();

var Nunchaku = function() {
  this.name = "nunchaku";
  this.damage = 6;
  this.hands = 1;
};
console.log("");
console.log("Dart set prototype");
Nunchaku.prototype = new Weapon();

var LightSaber = function() {
  this.name = "light saber";
  this.damage = 16;
  this.hands = 1;
};
console.log("");
console.log("Dart set prototype");
LightSaber.prototype = new Weapon();

