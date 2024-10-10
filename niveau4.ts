// ex. a
function print_array(arr: number[]): void {
    console.log(arr);
}
// print_array([1, 2, 3]);

// ex. b
function max_array(arr: number[]): number {
    let maxNum = 0;
    
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        }
    }

    return maxNum;
}
// console.log(max_array([4, 7, 1, 3, 2]));

function max_array2(arr: number[]): number {
    arr.sort();

    return arr[arr.length - 1];
}
// console.log(max_array2([4, 7, 1, 3, 2]));

// ex. c
function sum_array(arr: number[]): number {
    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}
// console.log(sum_array([1, 3, 2, 10]));

// ex. d
function count_array(arr: number[], n: number): number {
    let count = 0;

    for(let i = 0; i < arr.length; i++) {
        if (n == arr[i]) {
            count++;
        }
    }

    return count;
}
// console.log(count_array([1, 3, 1, 1], 3));

// ex. e
function is_sort(arr: number[]): boolean {
    let isSorted = true;

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            isSorted = false;

            break;
        }
    }

    return isSorted;
}
// console.log(is_sort([1, 2, 3, 4]));

// ex. f
function combine_arrays(a1: number[], a2: number[]): number[] {
    let sum1 = 0;
    let sum2 = 0;

    for(let i = 0; i < a1.length; i++) {
        sum1 += a1[i];
    }

    for(let j = 0; j < a2.length; j++) {
        sum2 += a2[j];
    }

    return [sum1, sum2];
}
// console.log(combine_arrays([1, 2, 3, 4], [1,2,3]));

// ex. g
function union_arrays(a1: number[], a2: number[]): number[] {
    let arr: number[] = [];

    for(let i = 0; i < a1.length; i++) {
        for(let j = 0; j < a2.length; j++) {
           if (a1[i] == a2[j]) {
            arr.push(a1[i]);
           }
        }
    }

    return arr;
}
// console.log(union_arrays([1, 8, 3, 4], [1, 2, 3]));

// ex. h
function reverse_array(arr: number[]): number[] {
    let newArr: number[] = [];

    for(let i = 0; i < arr.length; i++) {
        newArr.unshift(arr[i]);
    }

    return newArr;
}
// console.log(reverse_array([1, 8, 3, 4]));

// ex. i
function rotate_array(arr: number[]): number[] {
    arr.unshift(arr[arr.length - 1]);
    arr.pop();

    return arr;
}
// console.log(rotate_array([0, 1, 2, 3]));

// ex. j
function unique_array(arr: number[]): number[] {
    let newArr: number[] = [];

    for(let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}
// console.log(unique_array([1,1,5,1,8,9,6,5]));

// ex. k
// une variante facile )
function sort_array(arr: number[]): number[] {
    return arr.sort();
}
// console.log(sort_array([1,1,5,1,8,9,6,5]));

function sort_array2(arr: number[]): number[] {
    let newArr: number[] = [];
    let min: number;
    let index: number = 0;
    
    for(let i = 0; i < arr.length; i++) {
        min = arr[i];

        for(let j = i + 1; j < arr.length; j++) {
            if (arr[j] < min) {
                min = arr[j];
                index = j;
            }
        }

        arr[index] = arr[i];
        arr[i] = min;

    }
    return arr;
}
// console.log(sort_array2([5,10,8,9,1,6]));