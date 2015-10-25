var Weapon = function() {
  this.name = "bare hands";
  this.damage = 1;
  this.hands = 2;
  this.ranged = false;
  this.poisoned = false;

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
Dart.prototype = new Weapon();

var Dagger = function() {
  this.name = "dagger";
  this.damage = 4;
  this.hands = 1;
};
Dagger.prototype = new Weapon();

var Dirk = function() {
  this.name = "dirk";
  this.damage = 5;
  this.hands = 1;
};
Dirk.prototype = new Weapon();

var ShortSword = function() {
  this.name = "short sword";
  this.damage = 6;
  this.hands = 1;
};
ShortSword.prototype = new Weapon();

var Mace = function() {
  this.name = "mace";
  this.damage = 6;
  this.hands = 1;
};
Mace.prototype = new Weapon();

var BallChain = function() {
  this.name = "ball and chain";
  this.damage = 8;
  this.hands = 1;
};
BallChain.prototype = new Weapon();

var LongSword = function() {
  this.name = "long sword";
  this.damage = 8;
  this.hands = 2;
};
LongSword.prototype = new Weapon();

var Rapier = function() {
  this.name = "rapier";
  this.damage = 8;
  this.hands = 1;
};
Rapier.prototype = new Weapon();

var PoisonBlowgun = function() {
  this.name = "poison blowgun";
  this.damage = 4;
  this.hands = 1;
  this.poisoned = true;
  this.ranged = true;
};
PoisonBlowgun.prototype = new Weapon();

var BroadSword = function() {
  this.name = "broad sword";
  this.damage = 8;
  this.hands = 2;
};
BroadSword.prototype = new Weapon();

var WarAxe = function() {
  this.name = "war axe";
  this.damage = 10;
  this.hands = 2;
};
WarAxe.prototype = new Weapon();

var Halberd = function() {
  this.name = "halberd";
  this.damage = 12;
  this.hands = 2;
};
Halberd.prototype = new Weapon();

var LongBow = function() {
  this.name = "long bow";
  this.damage = 8;
  this.hands = 2;
  this.ranged = true;
};
LongBow.prototype = new Weapon();

var Staff = function() {
  this.name = "staff";
  this.damage = 6;
  this.hands = 2;
};
Staff.prototype = new Weapon();

var ShortBow = function() {
  this.name = "short bow";
  this.damage = 6;
  this.hands = 2;
  this.ranged = true;
};
ShortBow.prototype = new Weapon();

var Nunchaku = function() {
  this.name = "nunchaku";
  this.damage = 6;
  this.hands = 1;
};
Nunchaku.prototype = new Weapon();

var LightSaber = function() {
  this.name = "light saber";
  this.damage = 16;
  this.hands = 1;
};
LightSaber.prototype = new Weapon();

