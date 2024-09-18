// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
// console.log("The game will be available soon.");
const input = require('sync-input')
let attempts = 8;
console.log("H A N G M A N "+ attempts + " attempts");
let words = ['python', 'java', 'swift', 'javascript'];

let wins = 0; let loses = 0;
menu();
function menu(){
  let  choice = input("Type \"play\" to play the game, \"results\" to show the scoreboard, and \"exit\" to quit: ");
  if (choice === 'play'){
    play();
  } 
  else if (choice === 'results'){
    results();
  }
  else if (choice === 'exit'){
    return false;
  }
  else {
    menu();
  }
}
function play() {
  let attempts = 8;
  let chosenWord = words[Math.floor(Math.random() * words.length)];
  let hiddenWord =  "-".repeat(chosenWord.length);
  let guesses = "";
  while (attempts > 0){
  if (hiddenWord === chosenWord){
    console.log(hiddenWord);
    console.log( "You guessed the word "+ hiddenWord+"!");
    console.log("You survived!");
    wins++;
    menu();
    break;
  }
  console.log(hiddenWord);
  let guess = input("Input a letter: ");
  if (guess.length !== 1) {
    console.log("Please, input a single letter.");
  }
  else if ( guess.charCodeAt(0) < 97 || guess.charCodeAt(0) > 122) {
      console.log("Please, enter a lowercase letter from the English alphabet.");
  }
   else if (chosenWord.includes(guess) && !hiddenWord.includes(guess))  {
       console.log("  // "+ attempts + " attempts");
       guesses += guess;
       for (let j = 0; j < chosenWord.length; j++) {
           if (chosenWord.at(j) === guess) {
              hiddenWord = hiddenWord.substring(0, j) + chosenWord.charAt(j) + hiddenWord.substring(j + 1);
           }
       }      
    }
    else if (guesses.includes(guess)){
      console.log("You've already guessed this letter.");
    }
    else {
        attempts--;
        guesses += guess;
        console.log("That letter doesn't appear in the word  // " + attempts + " attempts");
    }
}

if (chosenWord !==  hiddenWord)  {
  console.log("You lost!")
  loses++;
  menu();
}
}
function results() {
  console.log("You won: " + wins + " times.");
  console.log( "You lost: " + loses + " times.");
  menu();
}