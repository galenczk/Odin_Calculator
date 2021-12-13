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

one.addEventListener("click", function () {});

two.addEventListener("click", function () {});

three.addEventListener("click", function () {});

four.addEventListener("click", function () {});

five.addEventListener("click", function () {});

six.addEventListener("click", function () {});

seven.addEventListener("click", function () {});

eight.addEventListener("click", function () {});

nine.addEventListener("click", function () {});

zero.addEventListener("click", function () {});

decimal.addEventListener("click", function () {
  if (!inputDisplay.textContent.includes(".") && repeat === false) {
    inputDisplay.textContent += ".";
  }
});

//Variables for conducting calculations.
let firstNumber = 0;
let secondNumber = 0;
let result = 0;
let operator = "";

//Variables for indicating the state of the calculator.

//Functions for calculator operations
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

equals.addEventListener("click", function () {});

add.addEventListener("click", function () {});

subtract.addEventListener("click", function () {});

multiply.addEventListener("click", function () {});

divide.addEventListener("click", function () {});

clear.addEventListener("click", function () {});

del.addEventListener("click", function () {});
