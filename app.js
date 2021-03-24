// import functions and grab DOM elements

import { compareNumbers } from './utils.js';

// initialize state

// set event listeners to update state and DOM

const usersGuess = document.getElementById('users-guess');
const submitButton = document.getElementById('submit-button');
const hint = document.getElementById('hint');
const remainingTrysText = document.getElementById('remaining-trys');
let realNumber = Math.ceil(Math.random() * 20);
let remainingTrysNumber = 3;


submitButton.addEventListener('click', () => {
    let usersNumber = usersGuess.valueAsNumber;
    let isRight = compareNumbers(usersNumber, realNumber);

    if (isRight === 1) {
        hint.textContent = 'Too High! :P';
        remainingTrysNumber--;
        remainingTrysText.textContent = `${remainingTrysNumber}`;
    }
    if (isRight === -1) {
        hint.textContent = 'Too Low! :P';
        remainingTrysNumber--;
        remainingTrysText.textContent = `${remainingTrysNumber}`;
    }
    if (isRight === 0) {
        hint.textContent = 'You win! :D';
        submitButton.style.display = 'none';
    }

    if (remainingTrysNumber === 0) {
        hint.textContent = 'You Lost :(';

    }

});

