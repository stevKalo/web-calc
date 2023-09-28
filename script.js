const buttons = document.querySelectorAll(".btn");
let inputA = document.querySelector("#inputA");
let inputB = document.querySelector("#inputB");

buttons.forEach((button) =>
  button.addEventListener("mousedown", () => {
    if (button.className.includes("num")) {
      inputA.textContent += button.id;
      console.log(inputA);
    }
  })
);

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
//
