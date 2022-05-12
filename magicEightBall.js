//In this project we will build a Magic Eight Ball using control flow in JavaScript.
//The user will be able to input a question, then our program will output a random fortune.

let userName = 'Wayne'
console.log(`Hello, ${userName}!`)
let userQuestion = 'Will I make lots of money?'
console.log(userQuestion)
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = ''
if (randomNumber === 1){
  eightBall = 'It is certain'
} else if (randomNumber === 2){
  eightBall = 'Reply hazy try again'
} else if (randomNumber === 3){
  eightBall = 'Reply hazy try again'
} else if(randomNumber === 4){
  eightBall = 'Cannot predict now'
} else if(randomNumber === 5){
  eightBall = 'My sources say no'
} else if(randomNumber === 6){
  eightBall = 'Outlook not so good'
} else if(randomNumber === 7){
  eightBall = 'Signs point to yes'
} else{
  eightBall = 'Try again'
}
console.log(eightBall)
