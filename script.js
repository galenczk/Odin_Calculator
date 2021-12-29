//Number buttons write to input display.
const inputDisplay = document.getElementById("inputDisplay");
const outputDisplay = document.getElementById("outputDisplay");
inputDisplay.textContent = 0;

const body = document.querySelector("body");

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

//Checks if inputDisplay is too large.
function inputTooLarge() {
  if (inputDisplay.textContent.length > 12) {
    inputDisplay.textContent = "Display Exceeded!";
    instateAwaitFirstInput();
  }
}

//Button logic
//Number buttons
function numberButtonLogic() {
  if (stateAwaitFirstInput) {
    inputDisplay.textContent = "";
    instateAwaitFirstOperator();
  } else if (stateAwaitNumber) {
    inputDisplay.textContent = "";
    instateAwaitNextOperator();
  } else if (repeatPossible) {
    clearAll();
    inputDisplay.textContent = "";
    instateAwaitFirstOperator();
    disableRepeat();
  }
}

one.addEventListener("click", function () {
  numberButtonLogic();
  inputDisplay.textContent += 1;
  inputTooLarge();
});

two.addEventListener("click", function () {
  numberButtonLogic();

  inputDisplay.textContent += 2;
  inputTooLarge();
});

three.addEventListener("click", function () {
  numberButtonLogic();

  inputDisplay.textContent += 3;
  inputTooLarge();
});

four.addEventListener("click", function () {
  numberButtonLogic();

  inputDisplay.textContent += 4;
  inputTooLarge();
});

five.addEventListener("click", function () {
  numberButtonLogic();

  inputDisplay.textContent += 5;
  inputTooLarge();
});

six.addEventListener("click", function () {
  numberButtonLogic();

  inputDisplay.textContent += 6;
  inputTooLarge();
});

seven.addEventListener("click", function () {
  numberButtonLogic();

  inputDisplay.textContent += 7;
  inputTooLarge();
});

eight.addEventListener("click", function () {
  numberButtonLogic();

  inputDisplay.textContent += 8;
  inputTooLarge();
});

nine.addEventListener("click", function () {
  numberButtonLogic();

  inputDisplay.textContent += 9;
  inputTooLarge();
});

zero.addEventListener("click", function () {
  if (stateAwaitFirstInput) {
    inputDisplay.textContent = "";
  } else if (stateAwaitNumber) {
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
  inputTooLarge();
});

decimal.addEventListener("click", function () {
  if (stateAwaitFirstInput) {
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
      resultToFirstNumber();
      operator = "+";
      displayFirstOperation();
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
    displayFirstOperation();
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
      resultToFirstNumber();
      operator = "-";
      displayFirstOperation();

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
    displayFirstOperation();
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
      resultToFirstNumber();
      operator = "*";

      displayFirstOperation();
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
    displayFirstOperation();
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
      resultToFirstNumber();
      operator = "/";

      displayFirstOperation();
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
    displayFirstOperation();
  }
});

clear.addEventListener("click", function () {
  disableRepeat();
  instateAwaitFirstInput();
  clearAll();
});

del.addEventListener("click", function () {
  if (stateAwaitFirstOperator) {
    inputDisplay.textContent = inputDisplay.textContent.slice(
      0,
      inputDisplay.textContent.length - 1,
    );
    if (!inputDisplay.textContent) {
      inputDisplay.textContent = 0;
      instateAwaitFirstInput();
    }
  } else if (stateAwaitNextOperator) {
    if (!repeatPossible) {
      inputDisplay.textContent = inputDisplay.textContent.slice(
        0,
        inputDisplay.textContent.length - 1,
      );
      if (!inputDisplay.textContent) {
        instateAwaitNumber();
      }
    }
  }
});

negate.addEventListener("click", function () {
  if (stateAwaitFirstOperator) {
    inputDisplay.textContent = -inputDisplay.textContent;
    updateFirstNumber();
  } else if (stateAwaitNextOperator) {
    inputDisplay.textContent = -inputDisplay.textContent;
    result = inputDisplay.textContent;
  }
});

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
    result = roundToThree(result);
  } else if (operator === "-") {
    result = +firstNumber - +secondNumber;
    result = roundToThree(result);
    return result;
  } else if (operator === "*") {
    result = +firstNumber * +secondNumber;
    result = roundToThree(result);
    return result;
  } else if (operator === "/") {
    result = +firstNumber / +secondNumber;
    result = roundToThree(result);
    return result;
  }
}

function roundToThree(num) {
  return +(Math.round(num + "e+3") + "e-3");
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

  console.log("AwaitFirstInput");
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

//Function for keyboard use

body.addEventListener("keydown", function (event) {
  if (event.repeat) {
    return;
  } else {
    //Key for "1"
    if (event.key === "1") {
      numberButtonLogic();
      inputDisplay.textContent += 1;
    }
    //Key for "2"
    else if (event.key === "2") {
      numberButtonLogic();
      inputDisplay.textContent += 2;
    }
    //Key for "3"
    else if (event.key === "3") {
      numberButtonLogic();
      inputDisplay.textContent += 3;
    }
    //Key for "4"
    else if (event.key === "4") {
      numberButtonLogic();
      inputDisplay.textContent += 4;
    }
    //Key for "5"
    else if (event.key === "5") {
      numberButtonLogic();
      inputDisplay.textContent += 5;
    }
    //Key for "6"
    else if (event.key === "6") {
      numberButtonLogic();
      inputDisplay.textContent += 6;
    }
    //Key for "7"
    else if (event.key === "7") {
      numberButtonLogic();
      inputDisplay.textContent += 7;
    }
    //Key for "8"
    else if (event.key === "8") {
      numberButtonLogic();
      inputDisplay.textContent += 8;
    }
    //Key for "9"
    else if (event.key === "9") {
      numberButtonLogic();
      inputDisplay.textContent += 9;
    }
    //Key for "0"
    else if (event.key === "0") {
      if (stateAwaitFirstInput) {
        inputDisplay.textContent = "";
      } else if (stateAwaitNumber) {
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
    }
    //Key for "decimal"
    else if (event.key === ".") {
      if (stateAwaitFirstInput) {
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
    }
    //Key for "equals"
    else if (event.key === "=") {
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
      }
    }
    //Key for "add"
    else if (event.shiftKey && event.key === "=") {
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
          resultToFirstNumber();
          operator = "+";
          displayFirstOperation();
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
        displayFirstOperation();
      }
    }
    //Key for "subtract"
    else if (event.key === "-") {
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
          resultToFirstNumber();
          operator = "-";
          displayFirstOperation();

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
        displayFirstOperation();
      }
    }
    //Key for "multiply"
    else if (event.shiftKey === true && event.key === "8") {
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
          resultToFirstNumber();
          operator = "*";

          displayFirstOperation();
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
        displayFirstOperation();
      }
    }
    //Key for "divide"
    else if (event.key === "/") {
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
          resultToFirstNumber();
          operator = "/";

          displayFirstOperation();
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
        displayFirstOperation();
      }
    }
    //Key for "clearAll"
    else if (event.key === "Delete") {
      disableRepeat();
      instateAwaitFirstInput();
      clearAll();
    }
    //Key for "delete"
    else if (event.key === "Backspace") {
      if (stateAwaitFirstOperator) {
        inputDisplay.textContent = inputDisplay.textContent.slice(
          0,
          inputDisplay.textContent.length - 1,
        );
        if (!inputDisplay.textContent) {
          inputDisplay.textContent = 0;
          instateAwaitFirstInput();
        }
      } else if (stateAwaitNextOperator) {
        if (!repeatPossible) {
          inputDisplay.textContent = inputDisplay.textContent.slice(
            0,
            inputDisplay.textContent.length - 1,
          );
          if (!inputDisplay.textContent) {
            instateAwaitNumber();
          }
        }
      }
    }
  }
});
