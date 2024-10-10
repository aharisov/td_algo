// ex. a
function h_triangle(h: number): string {
    let tmp: string = '';
    let res: string = '';

    for (let i = 0; i < h; i++) {
        tmp += '*';
        res += tmp + '\n';
    }

    return res;
}
// console.log(h_triangle(3));

// ex. b
function rectangle(n: number, m: number): string {
    let line: string = '';
    let res: string = '';

    for (let i = 0; i < n; i++) {
        line += '*';
    }

    line += '\n';

    for (let j = 0; j < m; j++) {
        res += line;
    }

    return res;
}
// console.log(rectangle(4, 3));

// ex. c
function reverse_ints(n: number): string {
    let res: string = '';

    for (let i = n; i > 0; i--) {
        res += i;
    }

    return res;
}
// console.log(reverse_ints(5));

// ex. d
function int_pyramid(n: number): string {
    let tmp: string = '';
    let res: string = '';

    for (let i = 0; i < n; i++) {
        tmp += i + 1;
        res += tmp + '\n';
    }

    return res;
}
// console.log(int_pyramid(5));

// ex. e
function beautiful_mult(n: number): string {
    let tmp: number = 0;
    let res: string = '';

    for (let i = 0; i < 10; i++) {
        tmp = i + 1;

        res += `${n}x${tmp} = ${n*tmp}`;
        tmp != 10 ? res += ', ' : '';
    }

    return res;
}
// console.log(beautiful_mult(3));