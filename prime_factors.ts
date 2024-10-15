/*

La décomposition en facteurs premiers consiste à chercher
à écrire un entier naturel non nul sous la forme d'un produit
de nombres premiers.

Par exemple, 160 peut décomposé sous la forme
160 = 2 * 2 * 2 * 2 * 2 * 5

L'objectif de cet exercice est de mettre en place un algorithme capable depuis
un entier donné, créer un tableau contenant les facteurs premiers qui le compose.

Pour cela on a déjà un prérequis :

- On a besoin de pouvoir constituer un tableau rempli de n nombres premiers.
    Pour cela on met en place la fonction get_primes qui prend un entier n et
    renvoie un tableau d'entiers rempli de tous les nombres premiers compris
    entre 1 et sqrt(n).

- Une fois que l'on est en capacité de produire un tableau comprenant les
    nombres premiers, on va appliquer l'algorithme suivant :

    - Parcourir le tableau des nombres entiers jusqu'à trouver un diviseur de n.
    - Stocker le diviseur en question dans notre tableau résultat puis diviser n
        par ce nombre premier.
    - réitérer jusqu'à ce que l'on atteigne comme valeur 1.

*/

function is_prime(n:number):boolean {
    let cnt = 0;

    for (let i = 0; i < n; i++) {
        let tmp = i + 1;
        
        if (n % tmp == 0) {
            cnt++;
        }
    }

    return cnt == 2;
}

function get_primes(n:number):number[] {
    let arr: number[] = [];

    for (let i = 2; i < Math.floor(Math.sqrt(n)); i++) {
        if (is_prime(i)) {
            arr.push(i);
        }
    }
    return arr;
}
// console.log(get_primes(160));

function prime_factors(n:number):number[] {
    let arrDivisers: number[] = [];
    let arrPrimes: number[] = get_primes(n);
    let res: number[] = [];

    for (let i = 0; i < arrPrimes.length; i++) {
        if (n % arrPrimes[i] == 0) {
            arrDivisers.push(arrPrimes[i]);
        }
    }

    for (let j = 0; j < arrDivisers.length; j++) {
        if (n % arrDivisers[j] != 1) {
            n /= arrDivisers[j];
            res.push(arrDivisers[j]);
            j--;
        }
    }

    return res;
}

console.log(prime_factors(160)); // [2,2,2,2,2,5]