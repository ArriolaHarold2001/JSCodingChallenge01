"use strict";
// VERY EASY: Create two variables and assign a number to each. Console log the difference between the numbers.
//Example output: “The difference between 6 and 2 is 4”

//VERY EASY CHALLENGE
document.querySelector(".VE-check").addEventListener("click", function () {
  const numInput1 = Number(document.querySelector(".NumOne").value);
  const numInput2 = Number(document.querySelector(".NumTwo").value);
  // console.log(numInput1, numInput2);

  let differenceEquation;

  if (numInput1 > numInput2) {
    differenceEquation = numInput1 - numInput2;
    document.querySelector(".VE-output").textContent = differenceEquation;
  } else {
    differenceEquation = numInput2 - numInput1;
    document.querySelector(".VE-output").textContent = differenceEquation;
  }
});
