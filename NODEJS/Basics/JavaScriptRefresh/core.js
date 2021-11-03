const { error } = require("console");
const { reject } = require("core-js/fn/promise");
const { text } = require("stream/consumers");

// Core Syntax
const name = 'Jon';
const age = 25;
const hashobbies = true;

function sumarizeUser(userName, userAge, userHasHobbies) {
    return (
        "Name is " +
        userAge + 
        " age is" + 
        userAge + 
        " and the user has hobbies: " + 
        userHasHobbies
    );
}

const example = () => {
    console.log("this is an arrow function");
}

// JavaScript Objects
 const person = {
    name: "jon",
    age: 25,
    greet() { // This is a method of the object.
        console.log("Hi");
    }
}

// Arrays
const arrays = [1, 2, 3, 4, 5, 6];
for (let number in arrays) {
    console.log(number);
}
arrays.map(even => {
    console.log(even);
});

const copiedArray = arrays.slice(); // Crestes a copy of the array.
const copy2Array = [...arrays] // Spread operator pulls out all the properties of the array are added to the new array

const toArray = (...args) => { // Rest operator
 return args;
};

// Destructuring

const printName = ({name}) => { // Destructure an object
    console.log(name);
}

// aync await Promise
setTimeout(() => {
    console.log("Timer is done"); // Async code
}, 1);
console.log("Hello!"); // Sync code
console.log("Hi!"); // Sync code

const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    });
    return promise;
}

setTimeout(() => {
    console.log("Timer is done!");
    fetchData().then(text => console.log(text)).catch(error => console.log(error))
}, 2000);