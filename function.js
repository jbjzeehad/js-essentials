/**
 *
 * 1. file name : add .js extension
 * 2. file run : keyboard shortcut ctrl+F5
 *
 */

function hello() { //regular function

    console.log("Hello world");

    //return undefined;

};

let msg = hello();
console.log(msg);

//......................................

const helo = function () { //function expression
    console.log("Hello Bangladesh");
};

let msg2 = helo();
console.log(msg2);

//......................................

const hello2 = function hello() { //named function expression
    console.log("Hello Asia");
};

let msg3 = hello2();
console.log(msg3);

//.....................................

const hello3 = () => { //array function
    console.log("Hello Europe");

}
const hello4 = () => console.log("Hello EuroAsia"); //inline return

const hello5 = () => 5; //without return keyword

const hello6 = (a, b) => a + b;

const hello7 = () => ({
    a: 5,
    b: 6,
});

const hello8 = () => {
    return {
        a: 7,
        b: 8,
    }
};

let msg4 = hello3();
console.log(msg4);

let msg5 = hello4();
console.log(msg5);

let msg6 = hello5();
console.log(msg6);

console.log(hello7());

console.log(hello8());

//...................................

function gelo() { //anonymous function
    return function () {
        console.log("Hello Japan");
    };
}

function gelo2() {
    return () => {
        console.log("Hello China");
    };
}

function gelo3() {
    return () => console.log("Hello Bhutan");
}

function gelo4() {
    return () => {
        return "Hello Thailand";
    };
}

console.log(gelo()());
console.log(gelo2()());
console.log(gelo3()());
console.log(gelo4()());
