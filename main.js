const input = document.getElementById("input");
const button = document.getElementById("button");
const resultImage = document.getElementById("result-img");
let chance = 5;
let numberList = [];

button.addEventListener("click", play);

const computerNumber = pickRandomNumber();

function play() {
  let userValue = input.value;

  //validation test
  if (userValue == "") {
    alert("Input any number");
    return;
  }
  if (userValue < 1 || userValue > 100) {
    alert("Input a number between 1 and 100");
    return;
  }
  if (numberList.includes(userValue)) {
    alert("You've already input the number");
    return;
  }
  //

  numberList.push(userValue);
  chance--;
  if (userValue == computerNumber) {
    gameWin();
    return;
  }
  chanceDecrease();
}

function pickRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

function gameWin() {
  resultImage.src = "./img/win.jpeg";
  button.disabled = true;
}

function chanceDecrease() {
  switch (chance) {
    case 4:
      resultImage.src = "./img/four.jpeg";
      break;
    case 3:
      resultImage.src = "./img/three.jpeg";
      break;
    case 2:
      resultImage.src = "./img/two.jpeg";
      break;
    case 1:
      resultImage.src = "./img/one.jpeg";
      break;
    default:
      resultImage.src = "./img/failure.jpeg";
      button.disabled = true;
      break;
  }
}
