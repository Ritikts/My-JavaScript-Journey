// intro to array

// array is ordered collection of items and it is written in square brackets

let fruits = ["apple", "mango", "grapes"];
let numbers = [1, 2, 3];
let mixed = [1, 3, "string", null, undefined];
console.log(mixed); // 1, 3, 'string', null, undefined
console.log(fruits[2]); // grapes

fruits[1] = "pineapple";
console.log(fruits); // 'apple', 'pineapple', 'grapes'

let obj = {};
console.log(typeof fruits); // object and arrays are object
console.log(typeof obj); // obj
console.log(Array.isArray(fruits)); // This method is used to check the variable that it is array or not
