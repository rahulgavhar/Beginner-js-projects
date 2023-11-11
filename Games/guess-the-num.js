//Guessing Game
const prompt=require("prompt-sync")();
// If not on a browser, use the above line & npm install prompt-sync
let num1=Math.floor(Math.random()*100);
let num2=prompt("Enter the number: ");
let ii=1;
while (num1!=num2){
    if (num1>num2){
        console.log("The number is greater than ",num2);
    }
    else{
        console.log("The number is smaller than ",num2);
    }
    num2=prompt("Enter the number: ");
    ii++;
}
console.log("You have guessed the correct number in",ii,"guesses.");
