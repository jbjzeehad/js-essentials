/**
 *
 * 1. file name : add .js extension
 * 2. file run : keyboard shortcut ctrl+F5
 *
 */

//destructuring

const user = {
    id: 339,
    name: 'mashle',
    age: 42,
    education: {
        degree: 'graduate',
        school: {
            name: 'Dhaka Chittagang',
            place: 'BD'
        }
    },
};

const { name: naam } = user;
console.log(naam);

//...........................

const { id, age } = user;

console.log(id);
console.log(age);

//.....................

const { education: { degree }, } = user;

console.log(degree);

//..........................

const { year: { semester } = {}, } = user;

console.log(semester); //undefined

//..........................

const { education: { school: { name } } = {}, } = user;

console.log(name);

//..........................

//optional chaining

console.log(user?.education?.school?.place);
