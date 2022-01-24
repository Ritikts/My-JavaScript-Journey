// undefined - when value is not assigned

let firstName;
console.log(typeof firstName); // undefined because value is not assigned

firstName = "Ritik";
console.log(firstName, typeof firstName); // Ritik because value is assigned and type is string

// null -- means nothing

let str = null;
console.log(str, typeof str); // null and type will show object but it's type is null, object is showing because this is an error in javascript 

// BigInt
// there is a limit in javascript to store the number
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991 this is the highest number you can store in javascript 

// so bigint(n) is used when the number is more than the limitation
let num = 13426267262726298456n; 
console.log(num); // 13426267262726298456n