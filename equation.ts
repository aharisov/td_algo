/*
Typescript offre la function eval(expr : str) qui permet en donnant un string qui constitue une opération d'effectuer le calcul.
Par exemple eval("1+2+3") donnera 6.

L'objectif est d'utiliser cette fonction pour tenter de résoudre une équation en brut force (essayer toutes les possibilités). 

Pour ça on établie des règles :

- On considère que x est forcément positif, compris entre 0 et 9.
- 0 ne peut être utilisé comme préfixe, 0001 n'est pas considéré valide. La seule notation de 0 acceptée est seul ou pas en première position.
- Si plusieurs résultats sont possibles, on prend le plus petit.
- L'inconnue ne peut être déjà présente dans le calcul. Par exemple 1*xx=xx aura pour solution x=2, puisque 00 n'est pas un résultat valide, 1*11=11 n'est pas possible parce que 1 est déjà dans l'équation, donc on choisit l'option 1*22=22
- S'il n'y a pas de solution, on renvoie -1

*/
function solve_equation(expr:string):number{
    let tmp = expr.split('=');
    let left: string = '';
    let right: string = '';
    let res: number[] = [];

    for (let i = 0; i < 10; i++) {
        left = tmp[0].replaceAll('x', i.toString());
        right = tmp[1].replaceAll('x', i.toString());
        

        if (left.includes('00') || right.includes('00') 
            || tmp[0].includes(i.toString()) || tmp[1].includes(i.toString())) {
            continue;
        }
        
        if (eval(left) == eval(right)) {
            res.push(i);
        }
        
    }
    return res.length == 0 ? -1 : res[0];
}


//Quelques exemples d'équations avec les résultats attendus :

console.log(solve_equation("1+1=x")) //2 
console.log(solve_equation("123*45x=5x088")) //6
console.log(solve_equation("-5x*-1=5x")) //0
console.log(solve_equation("19-45=5x")) //-1
console.log(solve_equation("xx*xx=302x")) //5
console.log(solve_equation("x*11=xx")) //2
console.log(solve_equation("xx*1=xx")) //2