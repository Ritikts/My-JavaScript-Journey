// primitive vs reference data types

// primitive data types 
let num1 = 4;
let num2 = 4;
console.log("value of num1 is:", num1);
console.log("value of num2 is:", num2);
num1++;
console.log("value of num1 is:", num1);
console.log("value of num2 is:", num2);

// reference data types
let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1", array1);
console.log("array2", array2);
array1.push("item3");
console.log("array1", array1);
console.log("array2", array2);
