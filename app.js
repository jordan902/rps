 const choices = [ 'rock', 'paper', 'scissors' ];


 function game() {

 }


 function playerRound() {
   const playerSelection = playerChoice();
   const computerSelection = computerChoice();
 }
 
 function playerChoice() {
     let input = prompt("Rock Paper or Scissors?"); 
     input = input.toLocaleLowerCase();
     console.log(input)
 }

 function computerChoice(){
     return choices [Math.floor(Math.random()*choices.length)]
 } 