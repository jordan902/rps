 const choices = [ 'rock', 'paper', 'scissors' ];
 const winners = []; 

 function resetGame(){

 }

 function startGame(){
   let imgs = document.querySelectorAll('img')
   imgs.forEach((img) =>
   img.addEventListener(('click'), () => {
     if(img.id){
       playRound(img.id);
     }
   }))
 }




 function playerRound(playerSelection) {
   let wins = checkWins();
   if (wins >=5) {
        return 
   }      
   const computerSelection = computerChoice();
   const winner = checkWinner(playerSelection, computerSelection);
   winners.push(winner);]
   countWins();
   displayRound(playerSelection, computerSelection, winner)
}

function displayRound(playerSelection, computerSelection)
document.querySelector('.playerSelection').textContent = `You Chose: $
function countWins() {
  let playerWins = winners.filter((item) => item == "Player").length;
  let computerWins = winners.filter((item) => item == "Computer").length;
  let ties = winners.filter((item) => item == "Tie").length;
  document.querySelector('.playerScore').textContent = `Score: ${playerWins}`;
  document.querySelector('.computerScore').textContent = `Score: ${computerWins}`;
  document.querySelector('.ties').textContent = `Score: ${ties}`;
}
 function checkWins() {
  let playerWins = winners.filter((item) => item == "Player").length;
  let computerWins = winners.filter((item) => item == "Computer").length;
  return Math.max(playerWins, computerWins)
}

function computerChoice() {
  // update dom com selection
    return choices[Math.floor(Math.random() * choices.length)];
  }
  

  function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC) {
      return "Tie";
    } else if (
      (choiceP === "rock" && choiceC == "scissors") ||
      (choiceP === "paper" && choiceC == "rock") ||
      (choiceP === "scissors" && choiceC == "paper")
    ) {
      return "Player";
    } else {
      return "Computer";
    }
  }
  
  function logWins() {
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;

  }
  startGame();
