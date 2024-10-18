
/*

Le but de l'exercice est de gérer une partie de Pendu.

Pour cela, le dictionnaire de mots pendu.txt est mis à disposition. L'objectif est de parvenir
à lire ce fichier grâce au package fs et de séléctionner un des mots aléatoirement. 
Ensuite il faut gérer la boucle de jeu, affichant au joueur autant de _ que de lettres non découvertes
Il faut gérer l'entrée utilisateur grâce au package readline-sync et se souvenir de quelles lettres sont
devinées. Si le joueur joue une lettre déjà devinée par le passé, rien ne se passe.
Autrement, si la lettre est présente dans le mot à deviner on révèle son/ses emplacement(s). Si elle n'est
pas présente, le joueur perd une vie.

La partie se termine si le joueur n'a plus de vie ou s'il a trouvé toutes les lettres du mot à deviner.

*/
import * as fs from 'fs';
const readlineSync = require('readline-sync');

const HANGMAN_PICS : string[] = [
    "    +---+\n        |\n        |\n        |\n       ===", 
    "    +---+\n    O   |\n        |\n        |\n       ===",
    "    +---+\n    O   |\n    |   |\n        |\n       ===",
    "    +---+\n    O   |\n   /|   |\n        |\n       ===",
    "    +---+\n    O   |\n   /|\\  |\n        |\n       ===",
    "    +---+\n    O   |\n   /|\\  |\n   /    |\n       ===",
    "    +---+\n    O   |\n   /|\\  |\n   / \\  |\n       ==="]

const words = fs.readFileSync('Hangman/pendu.txt', 'utf-8').split('\n');

// generates word
function getWord(): string {
    let index: number = Math.floor(Math.random() * words.length + 1);
    
    return words[index];
}

// shows empty word or progress of user
function drawWord(word: string, guessedLetters: string[]): string {
    let strTmp: string[] = [];
    
    for (let i = 0; i < word.length; i++) {
        strTmp.push('_');
    }

    for (let j = 0; j < word.length; j++) {
        if (guessedLetters.includes(word[j])) {
            strTmp[j] = word[j];
        }
    }
    console.log('guessed letters - ' + guessedLetters); // just for test purposes
    
    return strTmp.join('');
}

function startGame() {
    let wordUnknown: string = getWord().replace('\r', '');
    let strTmp: string = drawWord(wordUnknown, []);
    let cnt: number = 0;
    let userInputs: string[] = [];
    let guessedLetters: string[] = [];
    
    console.log('word - ' + wordUnknown); // just for test purposes
    console.log('On commence :');

    while (wordUnknown != strTmp && cnt < 7) {
        console.log('Le mot inconnu : ' + strTmp);
        const newInput = readlineSync.question('Entrez une lettre, s\'il vous plaît : ');
        
        if (userInputs.includes(newInput) || newInput == '') {
            console.log('Vous avez déjà indiqué ce lettre.');
            
            continue;
        } else {
            userInputs.push(newInput);
        }
        
        if (!wordUnknown.includes(newInput)) {
            console.log('Vous avez mal deviné.');
            
            cnt++;
            console.log(HANGMAN_PICS[cnt]);
            
            if (cnt == 6) break;
        } else {
            guessedLetters.push(newInput);
        }

        strTmp = drawWord(wordUnknown, guessedLetters);
    }

    if (cnt == 6) {
        console.log('Désolé, vous avez perdu');
    } else {
        console.log('Vous avez gagné. Bien joué !');
    }
}

startGame();