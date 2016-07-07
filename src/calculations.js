"use strict";
//all damage will be calculated here
var players = require("./player");
// console.log("",players.player1 );

function checkAccuracy(){
  return Math.floor(Math.random() * (100) + 1);
}

function calculateWpnDmg (attacker, defender){
  var randomNum = checkAccuracy();  //checks whether or not you will hit or not
  if (randomNum < attacker.weapon.accuracy){
    var randomPower = Math.floor(Math.random() * ((1.5 * attacker.weapon.power) - attacker.weapon.power) + attacker.weapon.power);  //Randomize weapon damage
    var finalDmg = Math.floor((attacker.skill / 100) * randomPower);  // Player Skill Damage multiplier
    defender.energy -= finalDmg;

    console.log("You Hit!", randomNum);    
    console.log("Weapon Power", attacker.weapon.power);
    console.log("Random Power", randomPower);
    console.log("finalDmg is", finalDmg);
    console.log(`${defender.name}`, "HP is currently", defender.energy);

  } else {
    console.log("You Missed", randomNum);
  }
}

function calculateSpellDamage(playerUsing,playerDefending,spellUsed){
	console.log(playerDefending);

	var experience = playerUsing.experience/100;

	playerUsing.energy= playerUsing.energy + Math.floor((spellUsed.energyPercRestored/100*(playerUsing.energy))*experience);
	playerUsing.energy= playerUsing.energy+spellUsed.energyRestored*experience;

	playerUsing.skill+= Math.floor(((spellUsed.skillAddition/100)*playerUsing.skill)*experience);

	playerDefending.energy= playerDefending.energy-spellUsed.energyReduction*experience;
	playerDefending.energy= playerDefending.energy- Math.floor(((spellUsed.energyPercReduction/100) * playerDefending.energy)*experience);

	if(spellUsed.targetsBoth===true){
		playerUsing.energy-= 50*experience;
		playerDefending.energy-=50*experience;
	}

	playerDefending.skill-= Math.floor(((spellUsed.skillReduction/100)*playerDefending.skill)*experience);
	playerDefending.experience-= Math.floor(((spellUsed.experienceReduction/100)*playerDefending.experience)*experience);

	console.log(playerDefending);

}
calculateSpellDamage(players.player1,players.player2,players.player1.spell2);



// while (players.player1.energy > 0 && players.player2.energy > 0){
//   calculateWpnDmg(players.player1, players.player2);
//   calculateWpnDmg(players.player2, players.player1);
// }



// calculateWpnDmg(players.player1, players.player2);
