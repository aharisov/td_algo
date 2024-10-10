// ex. a
function print_int(n: number): void {
    for (let i = 0; i < n; i++) {
        console.log(i + 1); 
    }
}

// ex. b
function sum_int(n: number): number {
    let sum: number = 0;

    for (let i = 0; i < n; i++) {
        sum += i + 1; 
    }

    return sum;
}
// console.log(sum_int(4));

// ex. c
function mult_table(n: number): void {
    for (let i = 0; i < n; i++) {
        console.log(`${n} * ${i + 1} = ${n * (i + 1)}`);
    }
}
// mult_table(3);

// ex. d
function factorial(n: number): number {
    let res = 1;

    for (let i = n; i > 1; i--) {
        res *= i;
    }

    return res;
}
// console.log(factorial(5));

// ex. e
function power(x: number, n: number): number {
    let res = 1;

    for (let i = 0; i < n; i++) {
        res *= x;
    }

    return res;
}
// console.log(power(2, 3));

// ex. f
function sum_even(n: number): number {
    let sum = 0;

    for (let i = 0; i < n; i++) {
        if ((i + 1) % 2 == 0) {
            sum += i + 1;
        }
    }

    return sum;
}
// console.log(sum_even(3));

// ex. g
function is_prime(n: number): boolean {
    let cnt = 0;

    for (let i = 0; i < n; i++) {
        let tmp = i + 1;
        
        if (n % tmp == 0) {
            cnt++;
        }
    }

    return cnt == 2;
}
// console.log(is_prime(4));

// ex. h
function pgcd(a: number, b: number): number {
    let numMin = a > b ? b : a;
    let pgcd = 0;

    for (let i = 0; i < numMin; i++) {
        let tmp = i + 1;

        if (a % tmp == 0 && b % tmp == 0) {
            pgcd = tmp;
        }
    }

    return pgcd;
}
// console.log(pgcd(2, 1));

// ex. i
function is_perfect(n: number): boolean {
    let sum = 0;

    for (let i = 0; i < n; i++) {
        let tmp = i + 1;

        if (n % tmp == 0 && n != tmp) {
            sum += tmp;
        }
    }
    
    return sum == n;
}
// console.log(is_perfect(6));