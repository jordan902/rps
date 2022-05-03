 const choices = [ 'rock', 'paper', 'scissors' ];


 function game() {
     playerRound();

 }


 function playerRound() {
   const playerSelection = playerChoice();
   const computerSelection = computerChoice();
   const winner = checkWinner(playerSelection, computerSelection)
   console.log(winner);
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
 return input;
}

 function computerChoice(){
     return choices [Math.floor(Math.random()*choices.length)]
} 

function validateInput(choice) {
    return choices.includes(choice) }

    function checkWinner (choiceP, choiceC){
        if (choiceP === choiceC) {
            return 'Tied';
        } else if (
        (choiceP === 'rock' && choiceC == 'scissors') ||
        (choiceP === 'paper' && choiceC == 'rock') ||
        (choiceP === 'scissors' && choiceC == 'paper')
        ){
            return "Player";
         } else  {
            return "Computer" 
         }
    } 
 game();