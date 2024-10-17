
/*

Dans cet exercices, vous allez créer une fonction qui va vérifier si un numéro de série est valide ou non.

Pour définir si un numéro de série est valide, il doit respecter plusieurs règles :

- Il est sous la forme XXXX-XXXX-XXXX-XXXX où les X sont des chiffres.
- Le 1e groupe de 4 chiffres est l'inverse du 3e groupes (Par exemple si le premier groupe est 1234, le 3e sera 4321).
- Le 2e groupe de chiffres est composé des 4 dernier chiffres du 3e groupe multiplié par 7.
- Le 3e groupe multiplié par 7 possède comme 4 derniers chiffres les mêmes que le groupe 2.
- La somme des 4 groupes de chiffres donne forcément un multiple de 10000.

Pour vous aider, voici quelques numéro de séries valides :

2806-2574-6082-8538
6730-2632-0376-0262
2223-2554-3222-2001
2415-5994-5142-6449
4212-4868-2124-8796
0441-0080-1440-8039
3210-0861-0123-5806

*/

/**
 * @param serialNumber Serial number format "XXXX-XXXX-XXXX-XXXX"
 * @returns 0 : No Error, 1 : Wrong Format, 2 : group 1 isn't group 3 reversed, 3 : group 2 isn't group 3 times 7, 4 : total sum isn't a multiple of 10000
 */
function has_error(serialNumber:string):number {
    let groups: string[] = serialNumber.split('-');
    let err: number[] = [0, 1, 2, 3, 4];
    let numSum: number = 0;

    // check presence of non numbers in groups
    for(const element of groups) {
        numSum += parseInt(element);
        
        if (!parseInt(element) || element.length < 4) {
            return err[1];
        }
    }

    // check if the 1st group is 3rd group reversed
    if (groups[0] != groups[2].split("").reverse().join("")) {
        return err[2];
    }

    // check if the 2nd group is group 3 times 7
    let resGroup3 = parseInt(groups[2])*7;

    if (parseInt(groups[1]) !== parseInt(resGroup3.toString().slice(-4, resGroup3.toString().length))) {
        return err[3];
    }

    // check total sum
    if (numSum % 10000 != 0) {
        return err[4];
    }

    return err[0];
}


//Quelques exemples de numéro de série avec les résultats attendus :


// 0 :
console.log("0 err");
console.log(has_error("2806-2574-6082-8538"));
console.log(has_error("6730-2632-0376-0262"));
console.log(has_error("2223-2554-3222-2001"));
console.log(has_error("2415-5994-5142-6449"));
console.log(has_error("4212-4868-2124-8796"));
console.log(has_error("0441-0080-1440-8039"));
console.log(has_error("3210-0861-0123-5806"));

// 1 :
console.log("return 1");
console.log(has_error("2806-2574-6082-858"));
console.log(has_error("XXXX-XXXX-XXXX-XXXX"));

// 2 :
console.log("return 2");
console.log(has_error("4221-4868-2124-8796"));
console.log(has_error("1122-1111-1212-1111"));

// 3 :
console.log("return 3");
console.log(has_error("1122-1111-2211-1111"));
console.log(has_error("3879-1111-9783-1111"));

// 4 :
console.log("return 4");
console.log(has_error("1122-5477-2211-1111"));
console.log(has_error("3879-8481-9783-1111"));
