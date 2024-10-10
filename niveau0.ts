// ex. a
function hello(): string {
    return 'Hello World!';
}

// ex. b
function add(a: number, b: number): number {
    return a + b;
}

// ex. c
function mult(a: number, b: number): number {
    return a * b;
}

// ex. d
function max_nb(a: number, b: number): number {
    return a > b ? a : b;
}

// console.log(max_nb(1, 100));

// ex. e
function min_nb(a: number, b: number): number {
    return a < b ? a : b;
}
// console.log(min_nb(500, 100));

// ex. f
function is_even(num: number): boolean {
    return (num % 2 == 0) ? true : false;
}
// console.log(is_even(3));

// ex. g
function is_div(a: number, b: number): boolean {
    return a % b == 0 ? true : false;
}
// console.log(is_div(2, 4));

// ex. h
function is_leap(year: number): boolean {
    if (year % 4 == 0 || year % 100 == 0) {
        return true;
    } else {
        return false;
    }
}
// console.log(is_leap(200));

// ex. i
function delta(a: number, b: number, c: number): number {
    return b*b - 4*a*c;
}
// console.log(delta(1, 2, 3));

// ex. j
function root(a: number, b: number, c: number): number[] {
    const deltaRes: number = delta(a, b, c);
    const res: number[] = [];

    if (deltaRes == 0) {
        res.push(-1*b/(2*a));
    } else if (deltaRes > 0) {
        res.push(Math.round(-1*b - (Math.sqrt(deltaRes) / 2*a)));
        res.push(Math.round(-1*b + (Math.sqrt(deltaRes) / 2*a)));
    }

    return res;
}
// console.log(root(1, 4, 1));