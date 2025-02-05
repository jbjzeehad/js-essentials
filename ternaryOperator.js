/**
 *
 * 1. file name : add .js extension
 * 2. file run : keyboard shortcut ctrl+F5
 *
 */

//ternary Operator

const a = 6;
let result;

if (a % 2 === 0) {
    result = 'Even';
} else {
    result = 'Odd'
}

console.log(result);

//......................

const b = 7;

const result2 = b % 2 === 0 ? 'Even' : 'Odd';

console.log(result2);

//........................

const c = 9;

const result3 = c % 2 === 0 ? 'Even' : c % 3 === 0 ? 'Divisible by 3' : 'Simple Odd';

console.log(result3);