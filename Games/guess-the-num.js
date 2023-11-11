//Guessing Game
const prompt=require("prompt-sync")();
// If not on a browser, use the above line & npm install prompt-sync

function validateInput(num2){
    if (isNaN(num2)!=true){
        if (num2>=1 && num2<=100){
            return true;
        }else{
            console.log("Please enter a number from 1-100.\n");
            return false;
        }

    }
    else{
        console.log("Please enter a number.\n");
        return false;
    }
}
let num1=(Math.floor(Math.random()*100))+1;
let num2;
let ii=0;
while (num1!=num2){
    num2=prompt("Guess the number(1-100): ");
    num2=Number.parseInt(num2);
    while(validateInput(num2)!=true){
        num2=prompt("Guess the number(1-100): ");
        num2=Number.parseInt(num2);
    }
    ii++;
    if (num1>num2){
        console.log("The number is greater than ",num2,"\n");
    }
    else{
        console.log("The number is smaller than ",num2,"\n");
    }

}
console.log("You have guessed the correct number in",ii,"guesses.");