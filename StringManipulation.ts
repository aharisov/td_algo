/*

Exercice sur les Manipulations de Strings

Dans cet exercice, l'objectif est de recréer plusieurs fonctions de manipulation de strings sans utiliser 
les fonctions natives JavaScript correspondantes. 

Fonctions à Implémenter :

- split : Divise une chaîne de caractères en un tableau de sous-chaînes en fonction d'un séparateur.
- join : Rassemble les éléments d'un tableau en une seule chaîne de caractères en les concaténant avec 
        un séparateur.
- replace : Remplace les occurrences d'une sous-chaîne dans une chaîne de caractères par une autre sous-chaîne.
- reverse : Inverse l'ordre des caractères dans une chaîne de caractères.
- slice : Extrait une section d'une chaîne de caractères et renvoie une nouvelle chaîne de caractères.

*/


function split(expr:string, splitter:string):string[] {
    let arr: string[] = [];
    let str: string = '';

    for (let i = 0; i < expr.length; i++) {
        if (expr[i] != splitter) {
            str += expr[i]; 
        } else {
            arr.push(str);
            str = '';
        }
    }

    // push last characters if there are no other splitters
    arr.push(str);
    return arr;
}


function join(exprs:string[], jointer:string):string {
    let str: string = '';

    for (let i = 0; i < exprs.length; i++) {
        if (i == exprs.length - 1) {
            str += exprs[i];
        } else {
            str += exprs[i] + jointer;
        }
    }

    return str;
}


function replace(expr:string, to_replace:string, replace_with:string):string {
    let replaceIndexStart: number = expr.indexOf(to_replace);
    let strBeforeReplace: string = '';
    let strAfterReplace: string = '';

    if (replaceIndexStart != -1) {
        strBeforeReplace = slice(expr, 0, replaceIndexStart);
        strAfterReplace = slice(expr, replaceIndexStart + (to_replace.length), expr.length);
    } else {
        return expr;
    }
    
    return  strBeforeReplace + replace_with + strAfterReplace;
}

function reverse(expr:string):string {
    let str: string = '';

    for (let i = expr.length - 1; i > -1; i--) {
        str += expr[i];
    }
    return str;
}

function slice(expr:string, start:number, end:number):string {
    let str: string = '';
    
    if (end < 0) {
        end += expr.length;    
    }

    if (start > expr.length) {
        return '';
    }

    for (let i = start; i < end; i++) {
        str += expr[i];
    }
    return str;
}



// split
console.log("split");
console.log(split("Hello World", " ")); // ["Hello", "World"]
console.log(split("apple,banana,cherry", ",")); // ["apple", "banana", "cherry"]
console.log(split("abcde", ",")); // ["abcde"]

//join
console.log("\n\njoin");
console.log(join(["apple", "banana", "cherry"], ", ")); // "apple, banana, cherry"
console.log(join(["apple", "banana", "cherry"], "")); // "applebananacherry"
console.log(join([], ", ")); // ""

//replace
console.log("\n\nreplace");
console.log(replace("Hello World", "World", "Universe")); // "Hello Universe"
console.log(replace("Hello World Test", "World", "Universe")); // "Hello Universe Test"
console.log(replace("Hello World", "Universe", "World")); // "Hello World"
console.log(replace("Hello World", "World", "")); // "Hello "

//reverse
console.log("\n\nreverse");
console.log(reverse("Hello World")); // "dlroW olleH"
console.log(reverse("")); // ""
console.log(reverse("!@#$%^&*()")); // ")(*&^%$#@!"

//slice
console.log("\n\nslice");
console.log(slice("Hello World", 6, 11)); // "World"
console.log(slice("Hello World", 0, -6)); // "Hello"
console.log(slice("Hello World", 20, 30)); // ""