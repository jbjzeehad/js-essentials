/**
 *
 * 1. file name : add .js extension
 * 2. file run : keyboard shortcut ctrl+F5
 *
 */

//spread

const fruits = ['Banana', 'Orange'];

const result = [...fruits];

console.log(result);

//..............................

const fruits2 = ['Banana', 'Orange'];

const result2 = [...fruits];

result2.push('Mango');

console.log(result2);

//............................

const fruits3 = {
    name: 'Banana',
    name2: 'Orange'
};

const result3 = {
    ...fruits3
};

console.log(result3);

//.............................

//rest

function sum(...rest) {
    return rest.reduce((sum, curr) => sum + curr, 0);
}

console.log(sum(5, 6, 7, 8, 9));

//...........................

function sum2(text, ...rest) {
    const result = rest.reduce((sum, curr) => sum + curr, 0);
    console.log(`${text} ${result}`);
}

sum2("The sum is: ", 5, 6, 7, 8, 9);