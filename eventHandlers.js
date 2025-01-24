/**
 *
 * 1. file name : add .js extension
 * 2. file run : keyboard shortcut ctrl+F5
 *
 */

function clicked() { //event handler
    console.log("Button Now Clicked");
};

//...................................

function clicked2() { //event handler
    console.log("Button Clicked");
};

const button = document.getElementById('button');
button.addEventListener('click', clicked2);