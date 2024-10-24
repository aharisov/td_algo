import * as fs from 'fs';
const readlineSync = require('readline-sync');

const words = fs.readFileSync('/Volumes/Formation/IRIS/Algo/td_algo/niveau6/Hangman/pendu.txt', 'utf-8').split('\n');

// generates word
function getWord(): string {
    let index: number = Math.floor(Math.random() * words.length + 1);
    
    return words[index];
}

function mixLetters(word: string): string {
    let wordInitial: string = word;
    let newStr: string[] = wordInitial.split('');
    let tmpIndex: number = 0;
    let tmpLetter: string;

    for (let i = 0; i < wordInitial.length; i++) {
        // generate new index
        let newIndex: number = Math.floor(Math.random() * wordInitial.length);

        if (newIndex != tmpIndex) {
            tmpIndex = newIndex;
        }

        // change letter place
        tmpLetter = newStr[i];
        newStr[i] = newStr[newIndex];
        newStr[newIndex] = tmpLetter;
    }
    
    return newStr.join('');
}

function startGame() {
    let word: string = getWord().replace('\r', '');
    let mixedWord: string = mixLetters(word);
    let userGuess: string = '';

    console.log('word initial for testing :', word);
    console.log('Le mot chiffré :', mixedWord);

    while (userGuess != word) {
        userGuess = readlineSync.question('Entrez le mot caché : ');
        
        if (userGuess != word) {
            console.log('Vous avez mal deviné.');
            continue;
        }
    }
    
    console.log('Vous avez gagné !');
}

startGame();
