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
    instateAwaitFirstOperator();
  } else if (stateAwaitNumber === true) {
    inputDisplay.textContent = "";
    instateAwaitNextOperator();
  } else if (repeatPossible) {
    clearAll();
    inputDisplay.textContent = "";
    instateAwaitFirstOperator();
    disableRepeat();
  }
  inputDisplay.textContent += 1;
});

two.addEventListener("click", function () {
  if (stateAwaitFirstInput === true) {
    inputDisplay.textContent = "";
    instateAwaitFirstOperator();
  } else if (stateAwaitNumber === true) {
    inputDisplay.textContent = "";
    instateAwaitNextOperator();
  } else if (repeatPossible) {
    clearAll();
    inputDisplay.textContent = "";

    instateAwaitFirstOperator();
    disableRepeat();
  }
  inputDisplay.textContent += 2;
});

three.addEventListener("click", function () {
  if (stateAwaitFirstInput === true) {
    inputDisplay.textContent = "";
    instateAwaitFirstOperator();
  } else if (stateAwaitNumber === true) {
    inputDisplay.textContent = "";
    instateAwaitNextOperator();
  } else if (repeatPossible) {
    clearAll();
    inputDisplay.textContent = "";

    instateAwaitFirstOperator();
    disableRepeat();
  }
  inputDisplay.textContent += 3;
});

four.addEventListener("click", function () {
  if (stateAwaitFirstInput === true) {
    inputDisplay.textContent = "";
    instateAwaitFirstOperator();
  } else if (stateAwaitNumber === true) {
    inputDisplay.textContent = "";
    instateAwaitNextOperator();
  } else if (repeatPossible) {
    clearAll();
    inputDisplay.textContent = "";

    instateAwaitFirstOperator();
    disableRepeat();
  }
  inputDisplay.textContent += 4;
});

five.addEventListener("click", function () {
  if (stateAwaitFirstInput === true) {
    inputDisplay.textContent = "";
    instateAwaitFirstOperator();
  } else if (stateAwaitNumber === true) {
    inputDisplay.textContent = "";
    instateAwaitNextOperator();
  } else if (repeatPossible) {
    clearAll();
    inputDisplay.textContent = "";

    instateAwaitFirstOperator();
    disableRepeat();
  }
  inputDisplay.textContent += 5;
});

six.addEventListener("click", function () {
  if (stateAwaitFirstInput === true) {
    inputDisplay.textContent = "";
    instateAwaitFirstOperator();
  } else if (stateAwaitNumber === true) {
    inputDisplay.textContent = "";
    instateAwaitNextOperator();
  } else if (repeatPossible) {
    clearAll();
    inputDisplay.textContent = "";

    instateAwaitFirstOperator();
    disableRepeat();
  }
  inputDisplay.textContent += 6;
});

seven.addEventListener("click", function () {
  if (stateAwaitFirstInput === true) {
    inputDisplay.textContent = "";
    instateAwaitFirstOperator();
  } else if (stateAwaitNumber === true) {
    inputDisplay.textContent = "";
    instateAwaitNextOperator();
  } else if (repeatPossible) {
    clearAll();
    inputDisplay.textContent = "";

    instateAwaitFirstOperator();
    disableRepeat();
  }
  inputDisplay.textContent += 7;
});

eight.addEventListener("click", function () {
  if (stateAwaitFirstInput === true) {
    inputDisplay.textContent = "";
    instateAwaitFirstOperator();
  } else if (stateAwaitNumber === true) {
    inputDisplay.textContent = "";
    instateAwaitNextOperator();
  } else if (repeatPossible) {
    clearAll();
    inputDisplay.textContent = "";

    instateAwaitFirstOperator();
    disableRepeat();
  }
  inputDisplay.textContent += 8;
});

nine.addEventListener("click", function () {
  if (stateAwaitFirstInput === true) {
    inputDisplay.textContent = "";
    instateAwaitFirstOperator();
  } else if (stateAwaitNumber === true) {
    inputDisplay.textContent = "";
    instateAwaitNextOperator();
  } else if (repeatPossible) {
    clearAll();
    inputDisplay.textContent = "";

    instateAwaitFirstOperator();
    disableRepeat();
  }
  inputDisplay.textContent += 9;
});

zero.addEventListener("click", function () {
  if (stateAwaitFirstInput === true) {
    inputDisplay.textContent = "";
  } else if (stateAwaitNumber === true) {
    inputDisplay.textContent = "";
    instateAwaitNextOperator();
  } else if (repeatPossible) {
    clearAll();
    inputDisplay.textContent = "";

    instateAwaitFirstOperator();
    disableRepeat();
  }
  if (inputDisplay.textContent !== 0) {
    inputDisplay.textContent += 0;
  }
});

decimal.addEventListener("click", function () {
  if (stateAwaitFirstInput === true) {
    if (!inputDisplay.textContent.includes(".")) {
      inputDisplay.textContent += ".";
    }
    instateAwaitFirstOperator();
  } else if (stateAwaitFirstOperator) {
    if (!inputDisplay.textContent.includes(".")) {
      inputDisplay.textContent += ".";
    }
  } else if (repeatPossible) {
    clearAll();
    if (!inputDisplay.textContent.includes(".")) {
      inputDisplay.textContent += ".";
    }
    instateAwaitFirstOperator();
    disableRepeat();
  }
});

//OPERATION BUTTONS
equals.addEventListener("click", function () {
  if (stateAwaitNextOperator) {
    if (!repeatPossible) {
      updateSecondNumber();
      operate();
      displayCompleteOperation();
      enableRepeat();
    } else if (repeatPossible) {
      resultToFirstNumber();
      operate();
      displayCompleteOperation();
    }

    console.log(`result = ${result}`);
  }
});

add.addEventListener("click", function () {
  if (stateAwaitFirstOperator) {
    updateFirstNumber();
    operator = "+";
    displayFirstOperation();
    instateAwaitNumber();
  } else if (stateAwaitNextOperator) {
    if (!repeatPossible) {
      updateSecondNumber();
      inputDisplay.textContent = "";
      operate();
      displayCompleteOperation();
      resultToFirstNumber();
      operator = "+";
      instateAwaitNumber();
    } else if (repeatPossible) {
      inputDisplay.textContent = "";
      operator = "+";
      disableRepeat();
      resultToFirstNumber();
      displayFirstOperation();
      instateAwaitNumber();
    }
  } else if (stateAwaitNumber) {
    operator = "+";
  }
});

subtract.addEventListener("click", function () {
  if (stateAwaitFirstOperator) {
    updateFirstNumber();
    operator = "-";
    displayFirstOperation();
    instateAwaitNumber();
  } else if (stateAwaitNextOperator) {
    if (!repeatPossible) {
      updateSecondNumber();
      inputDisplay.textContent = "";
      operate();
      displayCompleteOperation();
      resultToFirstNumber();
      operator = "-";
      instateAwaitNumber();
    } else if (repeatPossible) {
      inputDisplay.textContent = "";
      operator = "-";
      disableRepeat();
      resultToFirstNumber();
      displayFirstOperation();

      instateAwaitNumber();
    }
  } else if (stateAwaitNumber) {
    operator = "-";
  }
});

multiply.addEventListener("click", function () {
  if (stateAwaitFirstOperator) {
    updateFirstNumber();
    operator = "*";
    displayFirstOperation();
    instateAwaitNumber();
  } else if (stateAwaitNextOperator) {
    if (!repeatPossible) {
      updateSecondNumber();
      inputDisplay.textContent = "";
      operate();
      displayCompleteOperation();
      resultToFirstNumber();
      operator = "*";
      instateAwaitNumber();
    } else if (repeatPossible) {
      inputDisplay.textContent = "";
      operator = "*";
      disableRepeat();
      resultToFirstNumber();
      displayFirstOperation();

      instateAwaitNumber();
    }
  } else if (stateAwaitNumber) {
    operator = "*";
  }
});

divide.addEventListener("click", function () {
  if (stateAwaitFirstOperator) {
    updateFirstNumber();
    operator = "/";
    displayFirstOperation();
    instateAwaitNumber();
  } else if (stateAwaitNextOperator) {
    if (!repeatPossible) {
      updateSecondNumber();
      inputDisplay.textContent = "";
      operate();
      displayCompleteOperation();
      resultToFirstNumber();
      operator = "/";
      instateAwaitNumber();
    } else if (repeatPossible) {
      inputDisplay.textContent = "";
      operator = "/";
      disableRepeat();
      resultToFirstNumber();
      displayFirstOperation();

      instateAwaitNumber();
    }
  } else if (stateAwaitNumber) {
    operator = "/";
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
function updateFirstNumber() {
  firstNumber = inputDisplay.textContent;

  console.log(`firstNumber = ${firstNumber}`);
}

function updateSecondNumber() {
  secondNumber = inputDisplay.textContent;

  console.log(`secondNumber = ${secondNumber}`);
}

function resultToFirstNumber() {
  firstNumber = result;

  console.log(`firstNumber = ${firstNumber}`);
}

function operate() {
  if (operator === "+") {
    result = +firstNumber + +secondNumber;
    console.log(`${firstNumber} + ${secondNumber}`);
    return result;
  } else if (operator === "-") {
    result = +firstNumber - +secondNumber;
    console.log(`${firstNumber} - ${secondNumber}`);

    return result;
  } else if (operator === "*") {
    result = +firstNumber * +secondNumber;
    console.log(`${firstNumber} * ${secondNumber}`);

    return result;
  } else if (operator === "/") {
    result = +firstNumber / +secondNumber;
    console.log(`${firstNumber} / ${secondNumber}`);

    return result;
  }
}

function clearAll() {
  firstNumber = 0;
  secondNumber = 0;
  result = 0;
  operator = "";
  inputDisplay.textContent = 0;
  outputDisplay.textContent = "";
}

//Variables for indicating the state of the calculator.
let stateAwaitFirstInput = true;
let stateAwaitFirstOperator = false;
let stateAwaitNumber = false;
let stateAwaitNextOperator = false;

let repeatPossible = false;

//Functions for changing the state of the calculator.
function instateAwaitFirstInput() {
  stateAwaitFirstInput = true;
  stateAwaitFirstOperator = false;
  stateAwaitNumber = false;
  stateAwaitNextOperator = false;

  console.log(`AwaitFirstInput`);
}

function instateAwaitFirstOperator() {
  stateAwaitFirstInput = false;
  stateAwaitFirstOperator = true;
  stateAwaitNumber = false;
  stateAwaitNextOperator = false;

  console.log(`AwaitFirstOperator`);
}

function instateAwaitNumber() {
  stateAwaitFirstInput = false;
  stateAwaitFirstOperator = false;
  stateAwaitNumber = true;
  stateAwaitNextOperator = false;

  console.log(`AwaitNumber`);
}

function instateAwaitNextOperator() {
  stateAwaitFirstInput = false;
  stateAwaitFirstOperator = false;
  stateAwaitNumber = false;
  stateAwaitNextOperator = true;

  console.log(`AwaitNextOperator`);
}

function enableRepeat() {
  repeatPossible = true;
  console.log(`repeat enabled`);
}

function disableRepeat() {
  repeatPossible = false;

  console.log(`repeat disabled`);
}

//Functions for displaying operations

function displayFirstOperation() {
  outputDisplay.textContent = `${firstNumber} ${operator}`;
  inputDisplay.textContent = "";
}

function displayCompleteOperation() {
  outputDisplay.textContent = `${firstNumber} ${operator} ${secondNumber} = `;
  inputDisplay.textContent = result;
}
