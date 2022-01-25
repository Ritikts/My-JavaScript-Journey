// string indexing

let firstName = "Ritik";

// R   I   T   I   K
// 0   1   2   3   4

// in JavaScript indexing is always started form 0

console.log(firstName[0]); // R
console.log(firstName[2]); // t
console.log(firstName[4]); // k

// to find the length of string
console.log(firstName.length); // 5

// length also counts the spaces
let spaceString = "Hello   ";
console.log(spaceString.length); // 8

// sometimes we don't know the length of a string because it may be very big and we want the last index of that string
// we can do this by "length - 1"

let randomLetters = "qwertyuiopasdfghjklzxcvbnm";
console.log(randomLetters[randomLetters.length - 1]); // m
