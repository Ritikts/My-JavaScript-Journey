// if
// else if
// else if
// else if
// else

let tempInDegree = Number(prompt("Temperature"));

if (tempInDegree < 0) {
  console.log("extremely cold outside");
} else if (tempInDegree < 16) {
  console.log("it is cold outside");
} else if (tempInDegree < 25) {
  console.log("wheater is ok");
} else if (tempInDegree < 35) {
  console.log("let's go for swim");
} else if (tempInDegree < 45) {
  console.log("turn on ac");
} else {
  console.log("it's too hot!!");
}
