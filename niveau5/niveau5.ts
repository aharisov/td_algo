// ex. a
function print_string(word: string): void {
    for (let i = 0; i < word.length; i++) {
        console.log(word[i]); 
    }
}
// console.log(print_string('hello world!'));

// ex. b
function fizzbuzz(n: number): string {
    let str: string = '';

    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            str += 'FizzBuzz-';
        } else if (i % 3 == 0) {
            str += 'Fizz-';
        } else if (i % 5 == 0) {
            str += 'Buzz-';
        } else {
            str += `${i}-`;
        }     
    }

    return str.slice(0, str.length - 1);
}
// console.log(fizzbuzz(16));

// ex. c
function sub_string(word: string, begin: number, end: number): string {
    
    return word.slice(begin, end);
}
function sub_string2(word: string, begin: number, end: number): string {
    let res: string = '';

    for (let i = begin; i < end; i ++) {
        res += word[i];
    }
    return word.slice(begin, end);
}
// console.log(sub_string('test', 1, 3));
console.log(sub_string2('test', 1, 3));

// ex. d
function is_sub_string(word: string, sub_string: string): boolean {
    let subIndex = 0;

    for (let i = 0; i < word.length; i++) {
        if (word[i] != sub_string[subIndex]) {
            subIndex = 0;
            continue;
        } else {
            subIndex++;
        }

        if (subIndex == sub_string.length - 1) {
            return true;
        }
    }
    return false;
}
// console.log(is_sub_string('testienatot', 'tienat'));