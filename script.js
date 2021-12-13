//Number buttons write to input display.
const inputDisplay = document.getElementById("inputDisplay");
const outputDisplay = document.getElementById("outputDisplay");
inputDisplay.textContent = 0;

//Number buttons assigned to variables.
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const decimal = document.getElementById("decimal");

//Operations and other buttons assigned to variables.
const clear = document.getElementById("clear");
const del = document.getElementById("del");
const signSwitch = document.getElementById("signSwitch");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");

//Button logic
//Number buttons
one.addEventListener("click", function () {
  if (stateAwaitFirstInput === true) {
    inputDisplay.textContent = "";
  }
  inputDisplay.textContent += 1;
});

two.addEventListener("click", function () {
  if (stateAwaitFirstInput === true) {
    inputDisplay.textContent = "";
  }
  inputDisplay.textContent += 2;
});

three.addEventListener("click", function () {
  if (stateAwaitFirstInput === true) {
    inputDisplay.textContent = "";
  }
  inputDisplay.textContent += 3;
});

four.addEventListener("click", function () {
  if (stateAwaitFirstInput === true) {
    inputDisplay.textContent = "";
  }
  inputDisplay.textContent += 4;
});

five.addEventListener("click", function () {
  if (stateAwaitFirstInput === true) {
    inputDisplay.textContent = "";
  }
  inputDisplay.textContent += 5;
});

six.addEventListener("click", function () {
  if (stateAwaitFirstInput === true) {
    inputDisplay.textContent = "";
  }
  inputDisplay.textContent += 6;
});

seven.addEventListener("click", function () {
  if (stateAwaitFirstInput === true) {
    inputDisplay.textContent = "";
  }
  inputDisplay.textContent += 7;
});

eight.addEventListener("click", function () {
  if (stateAwaitFirstInput === true) {
    inputDisplay.textContent = "";
  }
  inputDisplay.textContent += 8;
});

nine.addEventListener("click", function () {
  if (stateAwaitFirstInput === true) {
    inputDisplay.textContent = "";
  }
  inputDisplay.textContent += 9;
});

zero.addEventListener("click", function () {
  if (stateAwaitFirstInput === true) {
    inputDisplay.textContent = "";
  }
  inputDisplay.textContent += 0;
});

decimal.addEventListener("click", function () {
  if (!inputDisplay.textContent.includes(".")) {
    inputDisplay.textContent += ".";
  }
});

//Operation buttons
equals.addEventListener("click", function () {
  if (!stateAwaitFirstInput) {
  }
});

add.addEventListener("click", function () {
  if (!stateAwaitFirstInput) {
  }
});

subtract.addEventListener("click", function () {
  if (!stateAwaitFirstInput) {
  }
});

multiply.addEventListener("click", function () {
  if (!stateAwaitFirstInput) {
  }
});

divide.addEventListener("click", function () {
  if (!stateAwaitFirstInput) {
  }
});

clear.addEventListener("click", function () {});

del.addEventListener("click", function () {});

signSwitch.addEventListener("click", function () {});

//Variables for conducting calculations.
let firstNumber = 0;
let secondNumber = 0;
let result = 0;
let operator = "";

//Function for calculator operations.
function operate() {
  if (operator === "+") {
    result = +firstNumber + +secondNumber;
    return result;
  } else if (operator === "-") {
    result = +firstNumber - +secondNumber;
    return result;
  } else if (operator === "*") {
    result = +firstNumber * +secondNumber;
    return result;
  } else if (operator === "÷") {
    result = +firstNumber / +secondNumber;
    return result;
  }
}

//Variables for indicating the state of the calculator.
let stateAwaitFirstInput = true;
let stateAwaitFirstOperator = false;
let stateAwaitNumber = false;
let stateAwaitNextOperator = false;

//Functions for changing the state of the calculator.
function instateAwaitFirstInput() {
  stateAwaitFirstInput = true;
  stateAwaitFirstOperator = false;
  stateAwaitNumber = false;
  stateAwaitNextOperator = false;
}

function instateAwaitFirstOperator() {
  stateAwaitFirstInput = true;
  stateAwaitFirstOperator = false;
  stateAwaitNumber = false;
  stateAwaitNextOperator = false;
}

function instateAwaitFirstOperator() {
  stateAwaitFirstInput = true;
  stateAwaitFirstOperator = false;
  stateAwaitNumber = false;
  stateAwaitNextOperator = false;
}

function instateAwaitFirstOperator() {
  stateAwaitFirstInput = true;
  stateAwaitFirstOperator = false;
  stateAwaitNumber = false;
  stateAwaitNextOperator = false;
}
