"use strict";
// VERY HARD: Create a simple calculator that prompts the user for a number,
//an operator (either +, -, * or /) and another number,
//and then uses the functions created in the hard challenge to output the value in sentence form. Example output: "3 + 4 = 7"

function add(a, b) {
  let sum = a + b;
  return sum;
}

function subtract(a, b) {
  let remainder = a - b;
  return remainder;
}

function multiply(a, b) {
  let product = a * b;
  return product;
}

function divide(a, b) {
  let quotient = a / b;
  return quotient;
}

const addOp = document.querySelector(".addOp");
const subtractOp = document.querySelector(".subOp");
const multiplyOp = document.querySelector(".mulOp");
const divideOp = document.querySelector(".divOp");
const allDisplay = document.querySelector(".display");
const display1 = document.querySelector(".display--01");
const display2 = document.querySelector(".display--02");
const display3 = document.querySelector(".display--03");
const display4 = document.querySelector(".display--04");

addOp.addEventListener("click", function () {
  display1.style.display = "flex";
  display2.style.display = "none";
  display3.style.display = "none";
  display4.style.display = "none";

  document.querySelector(".H-check--01").addEventListener("click", function () {
    const input1 = Number(document.querySelector(".NumOne--01").value);
    const input2 = Number(document.querySelector(".NumTwo--01").value);
    // console.log(typeof input1, input1, typeof input2, input2);

    let hOutput = add(input1, input2);
    document.querySelector(".H-output--01").textContent = hOutput;
  });
});

subtractOp.addEventListener("click", function () {
  display2.style.display = "flex";
  display1.style.display = "none";
  display3.style.display = "none";
  display4.style.display = "none";

  document.querySelector(".H-check--02").addEventListener("click", function () {
    const input1 = Number(document.querySelector(".NumOne--02").value);
    const input2 = Number(document.querySelector(".NumTwo--02").value);

    let hOutput = subtract(input1, input2);
    document.querySelector(".H-output--02").textContent = hOutput;
  });
});

multiplyOp.addEventListener("click", function () {
  display3.style.display = "flex";
  display1.style.display = "none";
  display2.style.display = "none";
  display4.style.display = "none";

  document.querySelector(".H-check--03").addEventListener("click", function () {
    const input1 = Number(document.querySelector(".NumOne--03").value);
    const input2 = Number(document.querySelector(".NumTwo--03").value);

    let hOutput = multiply(input1, input2);
    document.querySelector(".H-output--03").textContent = hOutput;
  });
});

divideOp.addEventListener("click", function () {
  display4.style.display = "flex";
  display1.style.display = "none";
  display2.style.display = "none";
  display3.style.display = "none";

  document.querySelector(".H-check--04").addEventListener("click", function () {
    const input1 = Number(document.querySelector(".NumOne--04").value);
    const input2 = Number(document.querySelector(".NumTwo--04").value);

    let hOutput = divide(input1, input2);
    document.querySelector(".H-output--04").textContent = hOutput;
  });
});

document.querySelector(".prompt").addEventListener("click", function () {
  let firstNum;
  let secondNum;
  let operator;
  let inputNums;
  let operatorCount;
  let firstNumAmount;
  let secondNumAmount;
  const calcPrompt = prompt(
    "Enter an equation using ( + , - , * , / ) and 2 numbers EX: X + X"
  );
  console.log(calcPrompt);

  for (let i = 0; i < calcPrompt.length; i++) {
    if (
      calcPrompt.charAt(i) === "+" ||
      calcPrompt.charAt(i) === "-" ||
      calcPrompt.charAt(i) === "*" ||
      calcPrompt.charAt(i) === "/"
    ) {
      operator = calcPrompt.charAt(i);
      operatorCount = calcPrompt.charAt(i).length + 1;

      // console.log("operator", operator);
      // } else if (operatorCount === 2) {
      //   console.log("firstnumber", calcPrompt(i));
      //}
    } else if (
      calcPrompt.charAt(i) === "1" ||
      calcPrompt.charAt(i) === "2" ||
      calcPrompt.charAt(i) === "3" ||
      calcPrompt.charAt(i) === "4" ||
      calcPrompt.charAt(i) === "5" ||
      calcPrompt.charAt(i) === "6" ||
      calcPrompt.charAt(i) === "7" ||
      calcPrompt.charAt(i) === "8" ||
      calcPrompt.charAt(i) === "9" ||
      calcPrompt.charAt(i) === "0"
    ) {
      inputNums = calcPrompt.charAt(i);
      console.log(inputNums);
    }
  }

  inputNums = Number(calcPrompt);

  if (operator === "+") {
    alert(`${firstNum} ${operator} ${secondNum} = ${add(firstNum, secondNum)}`);
  } else if (operator === "-") {
    alert(
      `${firstNum} ${operator} ${secondNum} = ${subtract(firstNum, secondNum)}`
    );
  } else if (operator === "*") {
    alert(
      `${firstNum} ${operator} ${secondNum} = ${multiply(firstNum, secondNum)}`
    );
  } else if (operator === "/") {
    alert(
      `${firstNum} ${operator} ${secondNum} = ${divide(firstNum, secondNum)}`
    );
  } else {
    alert(
      "try inputing equation without spaces and only using the (+, -, *, /) operators"
    );
  }
});
