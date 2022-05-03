 const choices = [ 'rock', 'paper', 'scissors' ];


 function game() {
     playerRound();

 }


 function playerRound() {
   const playerSelection = playerChoice();
   const computerSelection = computerChoice();
 }
 
 function playerChoice() {
    let input = prompt("Rock Paper or Scissors?"); 
    while (input == null) {
    input = prompt('Type Rock Paper or Scissors');
} 
 input = input.toLowerCase();
 console.log(input);
}

 function computerChoice(){
     return choices [Math.floor(Math.random()*choices.length)]
} 

 game();