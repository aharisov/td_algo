/*

Conception d'une Calculatrice Simple en TypeScript


L'objectif de cet exercice est de créer une calculatrice simple en TypeScript
capable d'évaluer des expressions mathématiques de base. Il est nécessaire de déterminer l'ordre des opérations
pour assurer une évaluation correcte.
Le but est ensuite de Transpiler en JavaScript pour que le fichier index.html puisse charger le script et l'associer à l'affichage.

Pistes de Résolution :

- Remplacement des Signes de Soustraction :

Pour simplifier le traitement, remplacer les signes de soustraction par des opérations d'addition suivie 
d'une multiplication par -1. Cela transforme les soustractions en additions, ce qui facilite la logique de traitement.
En effet, l'addition et la soustraction sont des opérations similaires, et traiter toutes les opérations comme des additions.
Par exemple, l'expression "5 - 3" devient "5 + -1*3", ce qui peut être traité de manière plus uniforme avec les autres opérations d'addition.

- Séparation des Termes d'Addition :

Diviser l'expression en termes additionnels avant de la traiter. Cela simplifie le traitement en permettant de gérer 
les opérations d'addition de manière uniforme avant de passer aux opérations de multiplication/division.


Évaluation des Termes :

Une fois les termes additionnels définis, évaluer chaque terme séparément en suivant l'ordre des opérations. 
Cela garantit une évaluation cohérente et précise de l'expression mathématique.


*/


function addToDisplay(value:string) {
    let display : HTMLInputElement = (document.getElementById('display') as HTMLInputElement)
    display.value += value;
}

function clearDisplay() {
    let display : HTMLInputElement = (document.getElementById('display') as HTMLInputElement)
    display.value = '';
}

function calculate() {
    let display : HTMLInputElement = (document.getElementById('display') as HTMLInputElement)
    let result = evaluate(display.value);
    display.value = result.toString();
}

function split(word:string,char:string):string[]{
    let res : string[] = [];
    let str: string = "";

    for (let i = 0; i < word.length; i++) {
        if (word[i] != char) {
            str += word[i]; 
        } else {
            res.push(str);
            str = "";
        }
    }

    res.push(str);
    return res;
}

function replace(word:string,to_replace:string,replace_with:string):string{
    let res : string = "";

    return res;
}

function evaluate(expr:string):number{
    let res : number = 0;
    let tmpRes: string = '';
    let getSubtractedItems: string[] = split(expr, '-');

    // console.log('tmp expr', getSubtractedItems);

    // replace '-' and create temporary result
    tmpRes += getSubtractedItems[0];
    for(let i = 0; i < getSubtractedItems.length - 1; i++) {
        tmpRes += `+(-1)*${getSubtractedItems[i + 1]}`; 
    }

    // replace '+', calculate every item and add to result
    let getAddedItems: string[] = split(tmpRes, '+');
    for (let i = 0; i < getAddedItems.length; i++) {
        // console.log(getAddedItems[i]);
        
        res += parseInt(eval(getAddedItems[i]));
    }
    
    return res;
}