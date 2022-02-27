// break keyword
// continue keyword

// break keyword
for (i = 0; i <= 12; i++) {
  if (i === 5) {
    break;
  }
  console.log(i); // 0 1 2 3 4 break keyword stops the loop execution at given condition
}

//continue keyword
for (j = 0; j <= 10; j++) {
  if (j === 6) {
    continue;
  }
  console.log(j); // 0 1 2 3 4 5 7 8 9 10 continue keyword skips the given condition and starts looping to next value
}
