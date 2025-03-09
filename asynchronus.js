/**
 *
 * 1. file name : add .js extension
 * 2. file run : keyboard shortcut ctrl+F5
 *
 */

//asynchronus

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  const data = await response.json();

  console.log(data);
  console.log(data.title);
}

getData();

//..........................................

async function getData2() {
  const response2 = await fetch("https://jsonplaceholder.typicode.com/todos/3");
  const data2 = await response2.json();
  return data2;
}

function bigWork() {
  return getData2();
}

(async function () {
  const result = await bigWork();
  console.log(result);
})();

console.log("need to use the response");

//.........................................

async function getData3() {
  try {
    const response3 = await fetch(
      "https://jsonplaceholder.typicode.com/todos/5"
    );

    const data3 = await response3.json();
    return data3;
  } catch (err) {
    console.log(err);
  }
}

function bigWork2() {
  return getData3();
}

(async function () {
  const result2 = await bigWork2();
  console.log(result2);
})();

console.log("need to use the response try catch");
