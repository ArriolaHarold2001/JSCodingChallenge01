"use strict";
// MEDIUM: Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase),
//or neither. Use prompt to get user input, and then console log whether the user was shouting, whispering,
//or talking normally.

//MEDIUM CHALLENGE
const mOutput = document.querySelector(".M-output");

document.querySelector(".M-check").addEventListener("click", function () {
  const userInput = String(document.querySelector(".userInput").value);
  // console.log(userInput);

  let i = 0;
  let char = [];
  let shouting = 0;
  let whisper = 0;
  while (i < userInput.length) {
    char[i] = userInput.charAt(i);
    // console.log(char);
    if (!isNaN(char)) {
      document.querySelector(
        ".M-outputNumber"
      ).textContent = `Only Text Allowed!`;
    } else if (char[i] === char[i].toUpperCase()) {
      shouting++;
      // console.log(shouting);
    } else if (char[i] === char[i].toLowerCase()) {
      whisper++;
      // console.log(whisper);
    }

    if (shouting > whisper) {
      mOutput.textContent = "Shouting";
      mOutput.style.backgroundColor = "black";
      mOutput.style.color = "white";
      mOutput.style.padding = "5px";
    } else if (whisper > shouting) {
      mOutput.textContent = "Whispering";
      mOutput.style.backgroundColor = "black";
      mOutput.style.color = "white";
      mOutput.style.padding = "5px";
    } else {
      mOutput.textContent = "Normal";
      mOutput.style.backgroundColor = "black";
      mOutput.style.color = "white";
      mOutput.style.padding = "5px";
    }

    i++;
  }
});

document.querySelector(".resets").addEventListener("click", function () {
  mOutput.textContent = "?";
  mOutput.style.backgroundColor = "#f7f7f7";
  mOutput.style.color = "black";
  mOutput.style.padding = "0";
});

//Prompt section
document.querySelector(".prompt").addEventListener("click", function () {
  const userIn = prompt("Enter some Text");

  let i = 0;
  let char = [];
  let shouting = 0;
  let whisper = 0;
  while (i < userIn.length) {
    char[i] = userIn.charAt(i);
    // console.log(char);
    if (!isNaN(char)) {
      document.querySelector(
        ".M-outputNumber"
      ).textContent = `Only Text Allowed!`;
    } else if (char[i] === char[i].toUpperCase()) {
      shouting++;
      // console.log(shouting);
    } else if (char[i] === char[i].toLowerCase()) {
      whisper++;
      // console.log(whisper);
    }

    if (shouting > whisper) {
      alert("Shouting");
      return;
    } else if (whisper > shouting) {
      alert("Whispering");
      return;
    } else {
      alert("Normal");
      return;
    }

    i++;
  }
});
