// switch statement

let day = Number(prompt("Enter the number form 0 to 6")); // prompt always accept the values as a string so we use number method to accept the values as a number
switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Please enter the number between 0 and 6");
    break;
}

// if we don't use break here then it will print all the console log