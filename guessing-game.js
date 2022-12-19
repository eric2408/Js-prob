function guessingGame() {
    const target = Math.floor(Math.random()*100);
    let guessed = false;
    let count = 0;

    return function guess(num){
        if(guessed) return `The game is over, you already won!`;
        count++;
        if(num === target){
            guessed = true;
            const guess = numGuesses === 1 ? "guess" : "guesses";
            return `You win! You found ${num} in ${count} ${guess}.`;
        }
        
        if(num > target) return `${num} is too low!`;
        if(num < target) return `${num} is too high!`;
    };
    

}

module.exports = { guessingGame };
