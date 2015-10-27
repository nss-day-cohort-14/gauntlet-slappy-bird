var Battleground = function(humanCombatant, enemyCombatant) {
  this.human = humanCombatant;
  this.enemy = enemyCombatant;
};

Battleground.prototype.melee = function() {
  var baseHumanDamage = 0, baseEnemyDamage = 0, totalHumanDamage = 0, totalEnemyDamage = 0;
  var humanWeapon, enemyWeapon, modifier;
  var humanCritical = Math.random() * 100;
  var enemyCritical = Math.random() * 100;

  if (!this.human.class.magical) {
    humanCritical += this.human.intelligence / 10;
  }

  if (!this.enemy.class.magical) {
    enemyCritical += this.enemy.intelligence / 10;
  }

  /*
    Calculate damage done by player
   */
  if (!this.human.class.magical) {
    humanWeapon = this.human.weapon;
    modifier = Math.floor(this.human.strength / 10);
  } else {
    humanWeapon = new window[AvailableSpells[Math.round(Math.random() * (AvailableSpells.length - 1))]]();
    humanWeapon.cast();
    if (humanWeapon.defensive) {
      this.human.protection = humanWeapon.protection;
    }
    modifier = Math.floor(this.human.intelligence / 10);
  }

  if (!humanWeapon.defensive) {
    baseHumanDamage = Math.round(Math.random() * humanWeapon.damage + 1);
    totalHumanDamage = baseHumanDamage + modifier - this.enemy.protection;
    totalHumanDamage = (totalHumanDamage < 0) ? 0 : totalHumanDamage;

    if (humanCritical > 92) {
      totalHumanDamage = Math.floor(totalHumanDamage * 1.5);
    }
  }


  this.enemy.health -= totalHumanDamage;

  var battleResult = "";
  battleResult += "<div class=\"battle-record__human\">";
  if (humanWeapon.defensive) {
    battleResult += "&gt; " + this.human.playerName + " <span class=\"battle-health\">(" + this.human.health + " hp)</span> casts a " + humanWeapon.toString() + " for " + this.human.protection + " protection.";
  } else {
    battleResult += "&gt; " + this.human.playerName + " <span class=\"battle-health\">(" + this.human.health + " hp)</span> attacks with " + humanWeapon.toString() + " for " + totalHumanDamage + " damage.";
  }
  battleResult += (humanCritical > 92) ? " Critical hit!!" : "";
  battleResult += "</div>";
  $("#battle-record").append(battleResult);

  if (this.enemy.health <= 0) {
    $("#battle-record").append("<div class=\"battle-over\">The battle is over. You won!</div>");

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

    if (enemyWeapon.defensive) {
      this.enemy.protection = enemyWeapon.protection;
    }
  }

  /*
    Apply damage unless a defensive spell was cast
   */
  if (!enemyWeapon.defensive) {
    baseEnemyDamage = Math.round(Math.random() * enemyWeapon.damage + 1);
    totalEnemyDamage = baseEnemyDamage + modifier - this.human.protection;
    totalEnemyDamage = (totalEnemyDamage < 0) ? 0 : totalEnemyDamage;
    if (enemyCritical > 95) {
      totalEnemyDamage = Math.floor(totalEnemyDamage * 1.5);
    }
  }

  this.human.health -= totalEnemyDamage;

  battleResult = "<div class=\"battle-record__enemy\">";
  if (enemyWeapon.defensive) {
    battleResult += "&gt; " + this.enemy.species + " <span class=\"battle-health\">(" + this.enemy.health + " hp)</span> casts a " + enemyWeapon.toString() + " for " + this.enemy.protection + " protection.";
  } else {
    battleResult += "&gt; " + this.enemy.species + " <span class=\"battle-health\">(" + this.enemy.health + " hp)</span> attacks with " + enemyWeapon.toString() + " for " + totalEnemyDamage + " damage.";
    battleResult += (enemyCritical > 95) ? " Critical hit!!" : "";
  }
  battleResult += "</div>";
  $("#battle-record").append(battleResult);

  if (this.human.health <= 0) {
    $("#battle-record").append("<div class=\"battle-over\">The battle is over. The " + this.enemy.species + " won!</div>");

    return false;
  }
  
  return true;
};