/**
 *
 * 1. file name : add .js extension
 * 2. file run : keyboard shortcut ctrl+F5
 *
 */

var lang = "Bangla"; //global scope

function learn(topic) {
    lang = topic;

    if (true) { //block
        let a = 5;
        console.log(a);
    }
    console.log(`Example_01: I am learning ${topic}`);
}
learn("Javascript");
console.log(`Example_01: I know ${lang}`);

//........................................

var lang2 = "English";
function learn2(topic2) {
    var lang2 = topic2; //local or function scope

    if (true) { //block
        let a = 6;
    }

    //console.log(a); error  
    console.log(`Example_02: I am learning ${topic2}`);
}
learn2("JS");
console.log(`Example_02: I know ${lang2}`);

//.........................................

var lang3 = "Spanish";
function learn2(topic3) {
    var lang3 = topic3; //local or function scope

    if (true) { //block 
        const c = {
            b: 7,
        };

        c.b = 8
        console.log(c);
    }

    console.log(`Example_03: I am learning ${topic3}`);
}
learn2("Python");
console.log(`Example_03: I know ${lang3}`);