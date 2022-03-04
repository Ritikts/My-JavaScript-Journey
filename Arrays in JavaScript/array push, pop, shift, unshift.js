// array push pop
// array shift unshift

// push --- it will add elements at the end of array and return new length

let num = [1, 2, 3, 4, 5];
num.push(6);
console.log(num); // 1, 2, 3, 4, 5, 6

// pop --- it will remove an element from the end in array
num.pop();
console.log(num); // 1, 2, 3, 4, 5
// pop also returns the value
console.log(num.pop()); // 5

// unshift  --- it will add elements to starting of the array
num.unshift(0);
console.log(num); // 0, 1, 2, 3, 4

// shift -- it will remove an element from starting of an array
num.shift();
console.log(num); // 1, 2, 3, 4
// shift also returns value just like a pop
