let readLine = require('readline-sync');

// ex. a
function hello(): string {
    const nom = readLine.question(`Quel est votre nom ?`)
    return `Hello ${nom} ! Comment ça va ? `;
}
// console.log(hello());

// ex. b
function avg_inputs(): number {
    let count: number = 0;
    let num: number = +readLine.question(`Entrez un nombre... `);
    let sum: number = 0;

    if (num < 0) {
        return 0;
    }

    while (num >= 0) {
        sum += num;
        count++;
        
        num = +readLine.question(`Entrez un nombre... `);
    }
    
    return sum / count;
}
// console.log(avg_inputs());

// ex. c
function RPS(): string {
    const choices: string[] = ['Rock', 'Paper', 'Scissor'];
    let userInput: string = readLine.question(`Entrez ${choices[0]}, ${choices[1]} ou ${choices[2]}... `);
    let pcInput = choices[Math.floor(Math.random()*3)];
    let userWins: boolean = false;

    while(userWins != true) {
        if (
            ((userInput == choices[0] && pcInput == choices[1])
            || (userInput == choices[1] && pcInput == choices[2])
            || (userInput == choices[2] && pcInput == choices[0]))
            && (userInput != pcInput)
        ) {
            console.log('Vous avez perdu. Essayez encore une fois');
            userInput = readLine.question(`Entrez ${choices[0]}, ${choices[1]} ou ${choices[2]}... `);
            pcInput = choices[Math.floor(Math.random()*3)];
        } else if (userInput != choices[0] && userInput != choices[1] && userInput != choices[2]) {
            userInput = readLine.question(`Entrez ne que ${choices[0]}, ${choices[1]} ou ${choices[2]}... `);
        } else {
            userWins = true;
        }
    }
    
    return `Vous avez gagner !`;
}
// console.log(RPS());

// ex. d
function guessNumber(): string {
    let num = Math.floor(Math.random() * 1001);
    let userNum = +readLine.question('Choisissez un nombre entre 1 et 1000... ');
    let counter = 1;

    while(userNum != num) {
        // console.log(num);
        if (userNum < num) {
            console.log('trop petit');
        } else {
            console.log('trop grand');
        }
        userNum = +readLine.question('Choisissez un nombre entre 1 et 1000... ');
        counter++;
    }

    return `Vous avez gagner en ${counter} coups !`;
}
// console.log(guessNumber());

// ex. e
function mystMult(): string {
    let num = Math.floor(Math.random() * 1001);
    let userNum = +readLine.question('Choisissez un nombre entre 1 et 5000... ');
    let counter = 1;

    while(userNum != num) {
        // console.log(num);
        if (num % userNum == 0) {
            console.log('True');
        } else {
            console.log('False');
        }
        userNum = +readLine.question('Choisissez un nombre entre 1 et 5000... ');
        counter++;
    }

    return `Vous avez gagner en ${counter} coups !`;
}
// console.log(mystMult());