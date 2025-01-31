/**
 *
 * 1. file name : add .js extension
 * 2. file run : keyboard shortcut ctrl+F5
 *
 */

//object

const language = {
    name: 'JavaScript',
    year: 1919,
    creator: 'Brendon Eich'
};

console.log(Object.keys(language));
console.log(Object.values(language));
console.log(Object.entries(language));

//....................................

const language2 = {
    name: 'Python',
    year: 2002,
    creator: 'David Vila'
};

language2.popularity = '100';
console.log(language2);

//...................................

const a = 'popularity'

const language3 = {
    name: 'Python',
    year: 2002,
    creator: 'David Vila'
};

language3[a] = '100';
console.log(language3);

//...................................

const b = 'popularity'

const language4 = {
    name: 'Python',
    year: 2002,
    creator: 'David Vila',
    bol: b, // same: b:b -> b,
};

console.log(language4);