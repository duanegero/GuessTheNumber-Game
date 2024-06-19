let number = Math.floor(Math.random() * 10 + 1); //choosing a random number and assigning it to variable
let numberOfGuesses = 1; //setting variable to keep count of guesses
console.log(number); //printing number to the console before game begins 

function restartGame(){
    number = Math.floor(Math.random() * 10 + 1);
    console.log(number);
    numberOfGuesses = 1;
    document.getElementById('result').innerHTML = "";
    document.getElementById('userGuess').value = "";
    document.getElementById('guesses').innerHTML ="";
    return;
}

function checkUserGuess(){
    let guess = document.getElementById('userGuess').value; //assigning user's guess to vairable 

    if(guess > 10 || guess < 1){
        document.getElementById('result').innerHTML = `A number <u>between</u> <b>1 - 10</b>`;
        return;
    }
    //if and else if's to compare user guess to random number, printing results to the screen and adding the guess counter
    if(guess == number){
        document.getElementById('result').innerHTML = `<b>Correct</b><i> ${number}</i> is the number we're looking for!`;
        document.getElementById('guesses').innerHTML = `Gussses: ${numberOfGuesses}`;
    }else if(guess > number){
        document.getElementById('result').innerHTML = `Too <b>BIG</b>, try a <i>smaller</i> number`;
        numberOfGuesses++;
    }else{
        document.getElementById('result').innerHTML = `Too <i>small</i>, try a <b>BIGGER</b> number`
        numberOfGuesses++;
    }
}