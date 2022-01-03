"use strict";
// EASY: Create two variables and assign a person’s name to each.
//Console log a statement that says which name is shorter or longer, and by how many characters.
//Example output: “The name Thomas is longer than John by 2 characters”

//EASY CHALLENGE
document.querySelector(".E-check").addEventListener("click", function () {
  const NameInput1 = String(document.querySelector(".NameOne").value);
  const NameInput2 = String(document.querySelector(".NameTwo").value);
  // console.log(NameInput1, NameInput2);

  let NameDifference;
  // console.log(NameDifference);

  if (NameInput1.length > NameInput2.length) {
    NameDifference = NameInput1.length - NameInput2.length;
    document.querySelector(
      ".E-output"
    ).textContent = `The name ${NameInput1} is longer than ${NameInput2} by ${NameDifference} characters.`;
  } else if (NameInput2 > NameInput1) {
    NameDifference = NameInput2.length - NameInput1.length;
    document.querySelector(
      ".E-output"
    ).textContent = `The name ${NameInput2} is longer than ${NameInput1} by ${NameDifference} characters.`;
  } else {
    document.querySelector(
      ".E-output"
    ).textContent = `Input a name in each box to determine which one is longer`;
  }
});
