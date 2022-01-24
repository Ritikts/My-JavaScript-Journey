// trim() -- it is used to remove spaces
// toUppperCase() -- it change every character to uppercase
// toLowerCase() -- it change every character to lowercase
// slice() -- it gives new string by providing the indexing


// trim()
let firstName = "  ritik singh  ";
// console.log(firstName.length); // 15

let newString = firstName.trim();
console.log(newString); // ritik singh
// console.log(newString.length); // 11

// toUpperCase()
firstName = firstName.toUpperCase();
console.log(firstName); //  RITIK SINGH

// toLowerCase()
firstName = firstName.toLowerCase();
console.log(firstName); // ritik singh

// slice()
let sliceString = firstName.slice(3,5); // (starting index, ending index)
console.log(sliceString); // it