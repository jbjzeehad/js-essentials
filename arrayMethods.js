/**
 *
 * 1. file name : add .js extension
 * 2. file run : keyboard shortcut ctrl+F5
 *
 */

const fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];

//find()

const result = fruits.find((f) => f === 'Orange')
const result2 = fruits.find((f) => f === 'Lemon' || f === 'Mango')

console.log(result);
console.log(result2);

//........................................

//findIndex()

const result3 = fruits.findIndex((f) => f === 'Orange')
const result4 = fruits.findIndex((f) => f === 'Lemon' || f === 'Mango')

console.log(result3);
console.log(result4);

//.......................................

//filter()

const result5 = fruits.filter((f) => f === 'Orange')
const result6 = fruits.filter((f) => f === 'Lemon' || f === 'Mango')

console.log(fruits);
console.log(result5);
console.log(result6);

//.......................................

//slice()

const result7 = fruits.slice(1, 3);

console.log(result7);

//.......................................

//splice()

const result8 = fruits.splice(1, 1);

console.log(result8);
console.log(fruits);

//splice()

const result9 = fruits.splice(1, 3, 'Lichi', 'Guava', 'coconut', 'others');

console.log(result9);
console.log(fruits);

//....................................

//concat()

const resul = fruits.concat('Lichi2', 'Guava2', 'coconut2', 'others2');
const resul2 = fruits.concat(['Lichi3', 'Guava3', 'coconut3']); //both are same 

console.log(resul);
console.log(resul2);
console.log(fruits);

//....................................

//push()

const resul3 = fruits.push('peanut', 'carrot');

console.log(resul3);
console.log(fruits);

//....................................

//map()

const resul4 = fruits.map((f) => f === 'Lichi');

console.log(resul4);
console.log(fruits);

//map()

const resul5 = fruits.map((f) => {
    if (f === 'Lichi') {
        return 'Lichi';
    }
    else {
        return 'not available';
    }
});

console.log(resul5);
console.log(fruits);

//map()

const resul6 = fruits.map((f) => {
    if (f === 'Lichi') {
        return 'Lichi';
    }
    else {
        return 'not available';
    }
});

console.log(resul5);
console.log(fruits);

//map()

const resul7 = fruits.map((f) => `${f} ->`);
console.log(resul7);
console.log(fruits);
