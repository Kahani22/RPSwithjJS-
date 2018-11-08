(() => {
	// simple JS file
	console.log('fired! or loaded... whatever');

	// this is a single line comment
	var choices = ["Rock", "Paper","scissors"];
	var computer;
	var player = document.querySelector("#weapon");
	var trigger = document.querySelector("#play");
	var status = document.querySelector(".winlose");

	function playGame() {
		//make the computer choose a random weapon
		computer = choices[Math.floor(Math.random() * choices.length)];
		var player_choice = player.value;

		//check for a tie first
		if (computer.toLowerCase() === player_choice.toLowerCase()) {
			// it is a tie
			staus.textcontent = "Tie! You live to shoot another day.";
		}
		else if (player_choice.toLowerCase() === "rock" ) {
			if(computer.toLowerCase() === "scissors") {
			// Win
			staus.textcontent = "win! ${player_choice} beats ${computer}.";
			} else {
				// lose
				staus.textcontent = "Lose! ${computer} beats ${player_choice}.";
			} 
		}

		else if (player_choice.toLowerCase() === "paper" ) {
			if(computer.toLowerCase() === "rock") {
			  // Win
			  staus.textcontent = "win! ${player_choice} beats ${computer}.";
			} else {
				// lose
				staus.textcontent = "Lose! ${computer} beats ${player_choice}.";
			} 
		}
	
	else if (player_choice.toLowerCase() === "scissors" ) {
		if(computer.toLowerCase() === "paper") {
			// Win
			staus.textcontent = "win! ${player_choice} beats ${computer}.";
		} else {
				// lose
				staus.textcontent = "Lose! ${computer} beats ${player_choice}.";
			} 
		}
	
		else{
			player.value ="";
			alert("you didn't pick a valid weapon.. try again");
 		}
 	}

	trigger.addEventsListener("click", playGame);
})();