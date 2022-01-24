// rules for naming variables

// you cannot start with number
// example :- 1value (invalid), value1 (valid)

var value1 = 16;
console.log(value1); // 16

// you can use only underscore _ or dollar symbol
// example :- first_Name (valid), _firstName (valid), first$Name (valid), $firstName (valid)

var first_Name = "Ritik";
var _firstName = "John";
var first$Name = "Max";
var $firstName = "Terex";
console.log(first_Name, _firstName, first$Name, $firstName); // Ritik John Max Terex

// you cannot use spaces 
// example :- var first Name = "Ritik"; (invalid)

// convention
// start with small letter and use camelCase

var secondName = "Ritik Singh";
console.log(secondName); 

