var Battleground = function(humanCombatant, enemyCombatant) {
  this.human = humanCombatant;
  this.enemy = enemyCombatant;
};

Battleground.prototype.melee = function() {
  var baseHumanDamage;
  var baseEnemyDamage;
  var totalHumanDamage;
  var humanWeapon, enemyWeapon, modifier;
  var humanCritical = Math.random() * 100;
  var enemyCritical = Math.random() * 100;

  /*
    Calculate damage done by player
   */
  if (!this.human.class.magical) {
    humanWeapon = this.human.weapon;
    modifier = Math.floor(this.human.strength / 10);
  } else {
    humanWeapon = new window[AvailableSpells[Math.round(Math.random() * (AvailableSpells.length - 1))]]();
    humanWeapon.cast();
    modifier = Math.floor(this.human.intelligence / 10);
  }
  baseHumanDamage = Math.round(Math.random() * humanWeapon.damage + 1);
  totalHumanDamage = baseHumanDamage + modifier;
  if (humanCritical > 92) {
    totalHumanDamage = Math.floor(totalHumanDamage * 1.5);
  }


  this.enemy.health -= totalHumanDamage;

  var battleResult = "";
  battleResult += "<div class=\"battle-record__human\">";
  battleResult += "&gt; " + this.human.playerName + " <span class=\"battle-health\">(" + this.human.health + " hp)</span> attacks with " + humanWeapon.toString() + " for " + totalHumanDamage + " damage.";
  battleResult += (humanCritical > 92) ? " Critical hit!!" : "";
  battleResult += "</div>";
  $("#battle-record").append(battleResult);

  if (this.enemy.health <= 0) {
    $("#battle-record").append("<div>The battle is over. You won!</div>");

    return false;
  }

  /*
    Calculate damage done by enemy
   */
  if (!this.enemy.class.magical) {
    enemyWeapon = this.enemy.weapon;
    modifier = Math.floor(this.enemy.strength / 10);
  } else {
    enemyWeapon = new window[AvailableSpells[Math.round(Math.random() * (AvailableSpells.length - 1))]]();
    enemyWeapon.cast();
    modifier = Math.floor(this.enemy.intelligence / 10);
  }
  baseEnemyDamage = Math.round(Math.random() * enemyWeapon.damage + 1);
  totalEnemyDamage = baseEnemyDamage + modifier;
  if (enemyCritical > 95) {
    console.log("totalEnemyDamage",totalEnemyDamage);
    totalEnemyDamage = Math.floor(totalEnemyDamage * 1.5);
    console.log("totalEnemyDamage",totalEnemyDamage);
  }

  this.human.health -= totalEnemyDamage;

  battleResult = "<div class=\"battle-record__enemy\">";
  battleResult += "&gt; " + this.enemy.species + " <span class=\"battle-health\">(" + this.enemy.health + " hp)</span> attacks with " + enemyWeapon.toString() + " for " + totalEnemyDamage + " damage.";
  battleResult += (enemyCritical > 95) ? " Critical hit!!" : "";
  battleResult += "</div>";
  $("#battle-record").append(battleResult);

  if (this.human.health <= 0) {
    $("#battle-record").append("<div>The battle is over. The " + this.enemy.species + " won!</div>");

    return false;
  }
  
  return true;
};