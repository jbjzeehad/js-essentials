/**
 *
 * 1. file name : add .js extension
 * 2. file run : keyboard shortcut ctrl+F5
 *
 */

var lang = "Bangla"; //global scope

function learn(topic) {
    lang = topic;
    console.log(`Example_01: I am learning ${topic}`);
}
learn("Javascript");
console.log(`Example_01: I know ${lang}`);

//........................................

var lang2 = "English";
function learn2(topic2) {
    var lang2 = topic2; //local or function scope
    console.log(`Example_02: I am learning ${topic2}`);
}
learn2("JS");
console.log(`Example_02: I know ${lang2}`);