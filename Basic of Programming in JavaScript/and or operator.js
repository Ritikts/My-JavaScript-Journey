// and or operator

//and (&&)
let firstName = "Ritik";
let age = 18;
if (firstName[1] === "i" && age === 18) {
  // && checks both condition if one of them is wrong then else condition will be print
  console.log("name is ritik and age is 18");
} else {
  console.log("inside else");
}

// or ||
let firstName2 = "Ritik";
let age2 = 20;
if (firstName2[1] === "i" || age2 === 18) {
  // || checks both condition as well as one if one of them is wrong then, if condition will be print, if both wrong then else condition will print
  console.log("name is ritik and age is 18");
} else {
  console.log("inside else");
}
