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
 let check = validateInput(input);
 while (check == false ) { 
    input = prompt("Please answer with Rock, Paper or scissors");
    while (input == null) {
        input = prompt('Type Rock Paper or Scissors');
    } 
    input = input.toLocaleLowerCase();
    check = validateInput(input);  
 }
 console.log(input);
}

 function computerChoice(){
     return choices [Math.floor(Math.random()*choices.length)]
} 

function validateInput(choice) {
    return choices.includes(choice) }

 game();