const buttons = document.querySelectorAll(".btn");
let screen = document.querySelector("#inputA");
let buffer = document.querySelector("#inputB");

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
      screen.textContent += button.id;
    }
    if (button.className.includes("operator")) {
      if (buffer.textContent == "") {
        buffer.textContent = screen.textContent + ` ${button.id}`;
        zeroScreen();
      } else if (buffer.textContent != "" && screen.textContent == "") {
        let newBuffer = buffer.textContent.slice(0, -1);
        buffer.textContent = newBuffer + button.id;
      } else if (buffer.textContent != "" && screen.textContent != "") {
        equal();
        buffer.textContent = screen.textContent + ` ${button.id}`;
        zeroScreen();
      }
    }
    if (button.id == "equal") {
      if (buffer.textContent && screen.textContent) {
        equal();
      } else if (
        (screen.textContent == "8008" && buffer.textContent == "") ||
        (screen.textContent == "318008" && buffer.textContent == "")
      ) {
        screen.textContent = "Ha Ha Very Funny";
      }
    }
    if (button.id == "decimal") {
      if (!screen.textContent.includes(".")) screen.textContent += ".";
    }
    if (button.id == "pos/neg") {
      screen.textContent = "-" + screen.textContent;
    }
    if (button.id == "percent") {
      screen.textContent = Number(screen.textContent) / 100;
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
  // figure out operation
  // run function based on operation
  // update screen with answer
  let num1 = Number(buffer.textContent.slice(0, -1));
  let num2 = Number(screen.textContent);
  let answer = "";

  switch (buffer.textContent.slice(-1)) {
    case "+":
      answer = add(num1, num2);
      screen.textContent = answer;
      zeroBuffer();
      break;
    case "-":
      answer = subtract(num1, num2);
      screen.textContent = answer;
      zeroBuffer();
      break;
    case "/":
      if (num2 != 0) {
        answer = divide(num1, num2);
        screen.textContent = answer;
        zeroBuffer();
      } else {
        answer = "Nice Try";
        screen.textContent = answer;
        zeroBuffer();
      }
      break;
    case "x":
      answer = multiply(num1, num2);
      screen.textContent = answer;
      zeroBuffer();
      break;
  }
};

// ZERO FUNCTIONS
const zeroScreen = function () {
  screen.textContent = "";
};
const zeroBuffer = function () {
  buffer.textContent = "";
};
