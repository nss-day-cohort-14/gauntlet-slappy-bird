var Battleground = function(humanCombatant, enemyCombatant) {
  this.human = humanCombatant;
  this.enemy = enemyCombatant;
};

Battleground.prototype.melee = function() {
  var baseHumanDamage = Math.round(Math.random() * this.human.weapon.damage + 1);
  var baseEnemyDamage = Math.round(Math.random() * this.enemy.weapon.damage + 1);

  var totalHumanDamage = Math.floor(baseHumanDamage + (this.human.strength / 10));
  var totalEnemyDamage = Math.floor(baseEnemyDamage + (this.enemy.strength / 10));

  var battleResult = "";
  battleResult += "<div class=\"battle-record__human\">";
  battleResult += "&gt; " + this.human.playerName + "(" + this.human.health + " hp) attacks with " + this.human.weapon + " for " + totalHumanDamage + " damage";
  battleResult += "</div>";

  battleResult += "<div class=\"battle-record__enemy\">";
  battleResult += "&gt; " + this.enemy.species + "(" + this.enemy.health + " hp) attacks with " + this.enemy.weapon + " for " + totalEnemyDamage + " damage";
  battleResult += "</div>";

  this.human.health -= totalEnemyDamage;
  this.enemy.health -= totalHumanDamage;

  $("#battle-record").append(battleResult);

  if (this.human.health <= 0 || this.enemy.health <= 0) {
    $("#battle-record").append("<div>The battle is over. " + ((this.human.health > 0) ? "You" : "The " + this.enemy.species) + " won!</div>");

    return false;
  }

  return true;
};