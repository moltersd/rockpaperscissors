
//Get player Selection
  //  Create a box that allows a player to input rock, paper, or scissors
    //Make sure the player selection isn't case sensitive.
    let computerChoice = "";
    let choice = "";

function getPlayerChoice(){
    let input = prompt("Please choose rock, paper, or scissors");
    choice = input;
    if((choice !="paper") && (choice !="scissors" ) && (choice != "rock")){
        console.log(`Incorrect selection. Please choose rock, paper, or scissors`)
        getPlayerChoice();
    }
    else {console.log(`You chose ${choice}`)
        return choice};
        
}

//Get computer Selection
function getComputerChoice() {
    let choiceNumber = Math.floor(Math.random() * 3);
    if (choiceNumber === 0) {
        computerChoice = "rock"
    }
    else if (choiceNumber === 1) {
        computerChoice = "paper"
    }
    else if (choiceNumber === 2) {
        computerChoice = "scissors"
    }
    console.log(`The computer chose: ${computerChoice}`)
    return computerChoice;

}


  //  Generate random number between 0 and 2
    //If 0, rock
   // if 1, paper
   // if 2, scissors

//compare player selection to computer selection
  //  if player = rock & computer = paper, computer wins
  // if player = paper and computer = paper, tie
  // if player = scissors and computer = paper, player wins
    //  if player = rock & computer = rock, tie
  // if player = paper and computer = rock, player wins
  // if player = scissors and computer = rock, computer wins
    //  if player = rock & computer = scissors, player wins
  // if player = paper and computer = scissors, computer wins
  // if player = scissors and computer = scissors, tie
  function playRound(playerSelection,computerChoice) {

 
  if (
        ((computerChoice === "paper") && (playerSelection === "paper")) || 
        ((computerChoice === "rock") && (playerSelection === "rock")) || 
        ((computerChoice === "scissors") && (playerSelection === "scissors"))
        ) { return ("Tie!")

  }
  else if (
    ((computerChoice === "rock") && (playerSelection === "paper")) || 
    ((computerChoice === "paper") && (playerSelection === "scissors")) || 
    ((computerChoice === "scissors") && (playerSelection === "rock"))
    ) { return ("Player Wins!!")
    }
    else if (
        ((computerChoice === "paper") && (playerSelection === "rock")) || 
        ((computerChoice === "scissors") && (playerSelection === "paper")) || 
        ((computerChoice === "rock") && (playerSelection === "scissors"))
        ) { return("Computer Wins!!")
        }
    }
//output winner
//console log

/* Game
    Play 5 rounds
    Tally wins and losses for each player
    Announce score at the end of each game
    when someone wins 5 games, declare them the winner
*/
function game(bestOf) {
    compCounter = 0;
    playerCounter = 0
    for (let i = 0 ; i< bestOf; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        text = playRound(playerSelection, computerSelection);
        console.log(text)
        if(text === "Computer Wins!!" ) {
            compCounter = compCounter + 1
        }
        else if(text === "Player Wins!!" ) {
            playerCounter = playerCounter + 1
        }
        console.log(`Current Score: Player: ${playerCounter}; Computer: ${compCounter}`)
        
    }
    if(compCounter > playerCounter){
        console.log(`Unfortunately the computer wins the game!`)
    }
    else if(compCounter < playerCounter){
        console.log(`Yay, the player wins the game!`)
    }
    else if (compCounter = playerCounter){
        console.log(`It was a tie!`)
    }
}
game(7);







