// data

let jokesArray = ["What's the best thing about Switzerland?I don't know, but the flag is a big plus.",
 "I invented a new word! Plagiarism!" , 
 "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them."];

let inspoMessages = ["We cannot solve problems with the kind of thinking we employed when we came up with them.",
"Learn as if you will live forever, live like you will die tomorrow.",
"When you change your thoughts, remember to also change your world."];



//first: let user choose between joke or inspirational message


const readLine = require('readline');
let userChoice;

const rL = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});



userChoice = rL.question('Hello and welcome to the random message generator. Do you want a joke or an inspirational message? ', (choice) => {
    userChoice = choice;
    console.log("Here is your " + userChoice + ":");
    if(userChoice === 'joke'){
      console.log(jokesArray[randomNumber]);
    } else if(userChoice === 'inspirational message'){
      console.log(inspoMessages[randomNumber]);
    }
    rL.close();

});

console.log(userChoice);

//third display the chosen output

let randomNumber = Math.floor(Math.random() * 3);



