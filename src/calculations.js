"use strict";
//all damage will be calculated here

var players = require("./player");
var battleText =$("#battleText");
var p1Max = players.player1.energy;
var p2Max = players.player2.energy;


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

    battleText.html(`${attacker.name} hit ${defender.name} for ${finalDmg} damage`);


  } else {
    battleText.html(`${attacker.name} Missed`);
  }
  updateDOM();
}

function calculateSpellDamage(playerUsing,playerDefending,spellUsed){


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

	battleText.html(`${playerUsing.name} used ${spellUsed.name}`);
	updateDOM();
}

function updateDOM(){
	var player1img = $("#player1img");
	var player2img = $("#player2img");

	player1img.find(".energy").html(`Energy: ${Math.floor(players.player1.energy)}`);
	player1img.find(".experience").html(`Experience: ${players.player1.experience}`);
	player1img.find(".skill").html(`Skill: ${players.player1.skill}`);
  player1img.find(".progress").find(".progress-bar").prop("style",`width:${(players.player1.energy/p1Max)*100}%`);
  player1img.removeClass("bounceInLeft")
  player1img.toggleClass("rubberBand");

	player2img.find(".energy").html(`Energy: ${Math.floor(players.player2.energy)}`);
	player2img.find(".experience").html(`Experience: ${players.player2.experience}`);
	player2img.find(".skill").html(`Skill: ${players.player2.skill}`);
  player2img.find(".progress").find(".progress-bar").prop("style",`width:${(players.player2.energy/p2Max)*100}%`);
  player2img.removeClass("bounceInRight")
  player2img.toggleClass("rubberBand");
  	if(players.player1.energy<=0){
		battleText.html(`${players.player1.name} has joined the eternal unemployment line.`);
      speechSynthesis.speak(msgNo);
	} else if (players.player2.energy<=0){
		battleText.html(`Oh yay. Your dreary existence continues. Yippee.`);
  		speechSynthesis.speak(msgYay);
  	} else {}

};
 


// while (players.player1.energy > 0 && players.player2.energy > 0){
//   calculateWpnDmg(players.player1, players.player2);
//   calculateWpnDmg(players.player2, players.player1);
// }



// calculateWpnDmg(players.player1, players.player2);



// **************attack functions**************
// 
// 
var attack1 = $("#attack1");
var spellBtn1 = $("#spell1");
var spellBtn2 = $("#spell2");

attack1.click(function(){
		calculateWpnDmg(players.player1, players.player2);
		
		if(players.player2.energy>=0){
	setTimeout(function(){
		calculateWpnDmg(players.player2, players.player1);
		
	}, 1000);
};
});

spellBtn1.click(function(){
	console.log(players.player1.spell1);
		calculateSpellDamage(players.player1, players.player2, players.player1.spell1);
		
		if(players.player2.energy>=0){
	setTimeout(function(){
		calculateSpellDamage(players.player2, players.player1, players.player2.spell1);
		
	}, 1000);
}
});

spellBtn2.click(function(){
	console.log(players.player1.spell2);
		calculateSpellDamage(players.player1, players.player2, players.player1.spell2);

		
		if(players.player2.energy>=0){
	setTimeout(function(){
		calculateSpellDamage(players.player2, players.player1, players.player2.spell2);
		
	}, 1000);
}
});

//////////////////// SPEACH ////////////////////
//NOOOO
var msgNo = new SpeechSynthesisUtterance();
var voices = window.speechSynthesis.getVoices();

msgNo.voiceURI = 'native';
msgNo.volume = 1; // 0 to  1
msgNo.rate = .4; // 0.1 to 10
msgNo.pitch = 2; //0 to 2
msgNo.text = "NO";
msgNo.lang = 'en-US';
// speechSynthesis.speak(msgNo);


//YAAAAY
var msgYay = new SpeechSynthesisUtterance();
var voices = window.speechSynthesis.getVoices();

msgYay.voiceURI = 'native';
msgYay.volume = 1; // 0 to  1
msgYay.rate = .4; // 0.1 to 10
msgYay.pitch = 2; //0 to 2
msgYay.text = "Yes";
msgYay.lang = 'en-US';


// speechSynthesis.speak(msgYay);
//////////////////// SPEACH ////////////////////
