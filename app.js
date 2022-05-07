 const choices = [ 'rock', 'paper', 'scissors' ];
 const winners = []; 

 function resetGame(){

 }

 function startGame(){
   let imgs = document.querySelectorAll('img')
   imgs.forEach((img) =>
   img.addEventListener(('click'), () => {
     if(img.id){
       playerRound.(img.id);
     }
   }))
 }




 function playerRound(round) {
   const computerSelection = computerChoice();
   const winner = checkWinner(playerSelection, computerSelection);
   winners.push(winner);

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
