const buttons = document.querySelectorAll(".btn");
let screen = document.querySelector("#inputA");
let buffer = document.querySelector("#inputB");

let screenText = [];
let bufferText = [];

buttons.forEach((button) =>
  button.addEventListener("mousedown", () => {
    if (button.id == "all-clear") {
      zeroBuffer();
      zeroScreen();
    }
    if (button.id == "clear") {
      screen.textContent == "" ? zeroBuffer() : zeroScreen();
    }
    if (button.className.includes("num")) {
      if (screenText.length < 15) {
        screenText.push(button.id);
        updateScreen();
      }
    }
    if (button.className.includes("operator")) {
      bufferText.push(screenText.join(""));
      bufferText.push(button.id);
      updateBuffer();
      zeroScreen();
    }
    if (button.id == "equal") {
      equal();
    }
  })
);

const add = function (x, y) {
  return Number(x) + Number(y);
};
const subtract = function (x, y) {
  return x - y;
};
const multiply = function (x, y) {
  return x * y;
};
const divide = function (x, y) {
  return x / y;
};
const equal = function () {
  bufferText.push(screenText.join(""));
  updateBuffer();
  zeroScreen();
  switch (bufferText[1]) {
    case "+":
      screenText.push(add(bufferText[0], bufferText[2]));
      console.log(screenText);
      updateScreen();
      break;
    case "-":
      screenText.push(subtract(bufferText[0], bufferText[2]));
      console.log(screenText);
      updateScreen();
      break;
    case "/":
      screenText.push(divide(bufferText[0], bufferText[2]));
      console.log(screenText);
      updateScreen();
      break;
    case "x":
      screenText.push(multiply(bufferText[0], bufferText[2]));
      console.log(screenText);
      updateScreen();
      break;
  }
};

// UPDATE FUNCTIONS
const updateBuffer = function () {
  buffer.textContent = bufferText.join(" ");
};
const updateScreen = function () {
  screen.textContent = screenText.join("");
};

// ZERO FUNCTIONS
const zeroScreen = function () {
  screenText = [];
  screen.textContent = screenText.join();
};
const zeroBuffer = function () {
  bufferText = [];
  buffer.textContent = bufferText.join();
};

// make array using textContent in buffer with textContent on screen
// array is 3 items [num1, op, num2]
// check op in array, run function on two numbers depending on the op

// get button id
// if number add number
// if operator apply to number
//

// calculator logic
// numbers concatenate into "screen"
// modifers change aspects of numbers
// operator called, new number for receive
// if second operator called, replace initial
// if clear called, remove oeprator and bring back number
// new number is entered
// if equal is called, evaluate the solution
// if new operator is called, evaluate the solution and apply new operator whikle asking for new number
//

// BONUS
// Cheat Codes for Gabi
// divide 1 by 21 alerts "Happy Birthday!"
