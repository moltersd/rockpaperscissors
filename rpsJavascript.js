
//Get player Selection
  //  Create a box that allows a player to input rock, paper, or scissors
    //Make sure the player selection isn't case sensitive.
    let computerChoice = "";
    let choice = "";

function getPlayerChoice(){
    let input = prompt("Please choose rock, paper, or scissors");
    choice = input;
    console.log(choice)
    if((choice !="paper") && (choice !="scissors" ) && (choice != "rock")){
        console.log(`Incorrect selection. Please choose rock, paper, or scissors`)
        getPlayerChoice();
    }
    
    else { console.log(`You chose: ${choice}`)
            return choice};
        
}
getPlayerChoice();

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
getComputerChoice();


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
  if (
        ((computerChoice === "paper") && (choice === "paper")) || 
        ((computerChoice === "rock") && (choice === "rock")) || 
        ((computerChoice === "scissors") && (choice === "scissors"))
        ) { console.log("Tie!")

  }
  else if (
    ((computerChoice === "rock") && (choice === "paper")) || 
    ((computerChoice === "paper") && (choice === "scissors")) || 
    ((computerChoice === "scissors") && (choice === "rock"))
    ) { console.log("Player Wins!!")
    }
    else if (
        ((computerChoice === "paper") && (choice === "rock")) || 
        ((computerChoice === "scissors") && (choice === "paper")) || 
        ((computerChoice === "rock") && (choice === "scissors"))
        ) { console.log("Computer Wins!!")
        }
//output winner
//console log
