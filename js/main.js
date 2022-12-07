let btns = document.querySelectorAll("button.calculator__button");
let screen = document.getElementById("screen");

let plusOperator = sum();
let minusOperator = minus();
let multiOperator = multiply();
let divideOperator = divide();
let secondNumber;

let plusStatus = false;
let minusStatus = false;
let multStatus = false;
let divideStatus = false;

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => captureScreen(btns[i]));
}

function captureScreen(prmt) {
  switch (prmt.value) {
    case "1":
      screen.innerHTML += prmt.value;
      return parseFloat(screen.innerHTML);
    case "2":
      screen.innerHTML += prmt.value;
      return parseFloat(screen.innerHTML);
    case "3":
      screen.innerHTML += prmt.value;
      return parseFloat(screen.innerHTML);
    case "4":
      screen.innerHTML += prmt.value;
      return parseFloat(screen.innerHTML);
    case "5":
      screen.innerHTML += prmt.value;
      return parseFloat(screen.innerHTML);
    case "6":
      screen.innerHTML += prmt.value;
      return parseFloat(screen.innerHTML);
    case "7":
      screen.innerHTML += prmt.value;
      return parseFloat(screen.innerHTML);
    case "8":
      screen.innerHTML += prmt.value;
      return parseFloat(screen.innerHTML);
    case "9":
      screen.innerHTML += prmt.value;
      return parseFloat(screen.innerHTML);
    case "0":
      screen.innerHTML += prmt.value;
      return parseFloat(screen.innerHTML);
    case "+":
      plusOperator = parseFloat(screen.innerHTML);
      screen.innerHTML = "";
      sum(plusOperator);
      plusStatus = true;
      minusStatus = false;
      multStatus = false;
      divideStatus = false;
      break;
    case "-":
      minusOperator = parseFloat(screen.innerHTML);
      screen.innerHTML = "";
      minus(minusOperator);
      plusStatus = false;
      minusStatus = true;
      multStatus = false;
      divideStatus = false;
      break;
    case "*":
      multiOperator = parseFloat(screen.innerHTML);
      screen.innerHTML = "";
      multiply(multiOperator);
      plusStatus = false;
      minusStatus = false;
      multStatus = true;
      divideStatus = false;
      break;
    case "/":
      divideOperator = parseFloat(screen.innerHTML);
      screen.innerHTML = "";
      divide(divideOperator);
      plusStatus = false;
      minusStatus = false;
      multStatus = false;
      divideStatus = true;
      break;
    case ".":
      if (screen.innerHTML.includes(".") == true) {
        alert("Cannot add . again");
      } else {
        screen.innerHTML += prmt.value;
      }
      break;
    case "erase":
      screen.innerHTML = "";
      break;
    case "RESET":
      screen.innerHTML = "";
      plusStatus = false;
      minusStatus = false;
      multStatus = false;
      divideStatus = false;
      break;
    case "=":
      result();
      break;
    default:
      break;
  }
}

function sum(plusOperator) {
  return plusOperator;
}

function minus(minusOperator) {
  return minusOperator;
}

function multiply(multiOperator) {
  return multiOperator;
}

function divide(divideOperator) {
  return divideOperator;
}

function result() {
  if (plusStatus == true) {
    secondNumber = parseFloat(screen.innerHTML);
    resultDisplayed = plusOperator + secondNumber;
    if (screen.innerHTML == "") {
      alert("Not a valid operation");
    } else {
      screen.innerHTML = resultDisplayed;
    }
  } else if (minusStatus == true) {
    secondNumber = parseFloat(screen.innerHTML);
    resultDisplayed = minusOperator - secondNumber;
    if (screen.innerHTML == "") {
      alert("Not a valid operation");
    } else {
      screen.innerHTML = resultDisplayed;
    }
  } else if (multStatus == true) {
    secondNumber = parseFloat(screen.innerHTML);
    resultDisplayed = multiOperator * secondNumber;
    if (screen.innerHTML == "") {
      alert("Not a valid operation");
    } else {
      screen.innerHTML = resultDisplayed;
    }
  } else if (divideStatus == true) {
    secondNumber = parseFloat(screen.innerHTML);
    resultDisplayed = divideOperator / secondNumber;
    if (resultDisplayed == "Infinity") {
      screen.innerHTML = 0;
    } else if (screen.innerHTML == "") {
      alert("Not a valid operation");
    } else {
      screen.innerHTML = resultDisplayed;
    }
  }
}
