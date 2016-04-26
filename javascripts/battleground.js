let Battleground = function(humanCombatant, enemyCombatant) {
  this.human = humanCombatant;
  this.enemy = enemyCombatant;
};

Battleground.prototype.melee = function() {
  let baseHumanDamage = 0,
      baseEnemyDamage = 0,
      totalHumanDamage = 0,
      totalEnemyDamage = 0;
  let humanWeapon, enemyWeapon, modifier;
  let humanCritical = Math.random() * 100;
  let enemyCritical = Math.random() * 100;

  /*
    If the human/enemy class is a magical one, apply a bonus
    to the critical hit probability based on intelligence
   */
  if (!this.human.profession.magical) {
    humanCritical += this.human.intelligence / 10;
  }

  if (!this.enemy.profession.magical) {
    enemyCritical += this.enemy.intelligence / 10;
  }

  /*
    Calculate damage done by player
   */
  if (this.human.profession.magical) {
    humanWeapon = new window[AvailableSpells[Math.round(Math.random() * (AvailableSpells.length - 1))]]();
    humanWeapon.cast();
    modifier = Math.floor(this.human.intelligence / 10);

    // Handle defensive spells
    if (humanWeapon.defensive) {
      this.human.protection = humanWeapon.protection;

    // Handle spells that affect the traits of the opponent
    } else if (humanWeapon.debuff) {
      switch (humanWeapon.effect.trait) {
        case "intelligence":
          this.enemy.modifyIntelligence(humanWeapon.effect.amount * -1)
          break;
        case "strength":
          this.enemy.modifyStrength(humanWeapon.effect.amount * -1)
          break;
      };
    }
  } else {
    humanWeapon = this.human.weapon;
    modifier = Math.floor(this.human.strength / 10);
  }

  /*
    If the human player cast a defensive spell, skip calculating damage
   */
  if (!humanWeapon.defensive) {
    baseHumanDamage = Math.round(Math.random() * humanWeapon.base_damage + 1);
    totalHumanDamage = baseHumanDamage + modifier - this.enemy.protection;
    totalHumanDamage = (totalHumanDamage < 0) ? 0 : totalHumanDamage;

    if (humanCritical > 92) {
      totalHumanDamage = Math.floor(totalHumanDamage * 1.5);
    }
  }

  /*
    Reduce the enemy's health
   */
  this.enemy.health -= totalHumanDamage;

  /*
    Start building output string for human action
   */
  let battleResult = "";
  let actionType = (this.human.profession.magical) ? " casts a " : " attacks with ";
  battleResult += "<div class=\"battle-record__human\">";
  if (humanWeapon.defensive) {
    battleResult += "&gt; " + this.human.playerName + " <span class=\"battle-health\">(" + this.human.health + " hp)</span>" + actionType + humanWeapon.toString() + " for " + this.human.protection + " protection.";
  } else if (humanWeapon.debuff) {
    battleResult += "&gt; " + this.human.playerName + " <span class=\"battle-health\">(" + this.human.health + " hp)</span>" + actionType + humanWeapon.toString() + " for " + totalHumanDamage + " points.";
  } else {
    battleResult += "&gt; " + this.human.playerName + " <span class=\"battle-health\">(" + this.human.health + " hp)</span>" + actionType + humanWeapon.toString() + " for " + totalHumanDamage + " damage.";
  }
  battleResult += (humanCritical > 92) ? " Critical hit!!" : "";
  battleResult += "</div>";
  $("#battle-record").append(battleResult);

  /*
    If the human did enough damage to kill the enemy, stop the battle
   */
  if (this.enemy.health <= 0) {
    $("#battle-record").append("<div class=\"battle-over\">The battle is over. You won!</div>");

    return false;
  }

  /*
    Calculate damage done by enemy
   */
  if (!this.enemy.profession.magical) {
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
    baseEnemyDamage = Math.round(Math.random() * enemyWeapon.base_damage + 1);
    totalEnemyDamage = baseEnemyDamage + modifier - this.human.protection;
    totalEnemyDamage = (totalEnemyDamage < 0) ? 0 : totalEnemyDamage;
    if (enemyCritical > 95) {
      totalEnemyDamage = Math.floor(totalEnemyDamage * 1.5);
    }
  }

  this.human.health -= totalEnemyDamage;

  /*
    Start building output string for enemy action
   */
  battleResult = "<div class=\"battle-record__enemy\">";
  if (enemyWeapon.defensive) {
    battleResult += "&gt; " + this.enemy.species + " <span class=\"battle-health\">(" + this.enemy.health + " hp)</span> casts a " + enemyWeapon.toString() + " for " + this.enemy.protection + " protection.";
  } else {
    battleResult += "&gt; " + this.enemy.species + " <span class=\"battle-health\">(" + this.enemy.health + " hp)</span> attacks with " + enemyWeapon.toString() + " for " + totalEnemyDamage + " damage.";
    battleResult += (enemyCritical > 95) ? " Critical hit!!" : "";
  }
  battleResult += "</div>";
  $("#battle-record").append(battleResult);

  /*
    If the enemy did enough damage to kill the human, stop the battle
   */
  if (this.human.health <= 0) {
    $("#battle-record").append("<div class=\"battle-over\">The battle is over. The " + this.enemy.species + " won!</div>");

    return false;
  }

  return true;
};