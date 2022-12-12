//Calculator

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

document.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "1":
      if (screen.innerHTML.length > 20) {
        alert("Too many numbers");
      } else {
        screen.innerHTML += event.key;
        return parseFloat(screen.innerHTML);
      }
      break;
    case "2":
      if (screen.innerHTML.length > 20) {
        alert("Too many numbers");
      } else {
        screen.innerHTML += event.key;
        return parseFloat(screen.innerHTML);
      }
      break;
    case "3":
      if (screen.innerHTML.length > 20) {
        alert("Too many numbers");
      } else {
        screen.innerHTML += event.key;
        return parseFloat(screen.innerHTML);
      }
      break;
    case "4":
      if (screen.innerHTML.length > 20) {
        alert("Too many numbers");
      } else {
        screen.innerHTML += event.key;
        return parseFloat(screen.innerHTML);
      }
      break;
    case "5":
      if (screen.innerHTML.length > 20) {
        alert("Too many numbers");
      } else {
        screen.innerHTML += event.key;
        return parseFloat(screen.innerHTML);
      }
      break;
    case "6":
      if (screen.innerHTML.length > 20) {
        alert("Too many numbers");
      } else {
        screen.innerHTML += event.key;
        return parseFloat(screen.innerHTML);
      }
      break;
    case "7":
      if (screen.innerHTML.length > 20) {
        alert("Too many numbers");
      } else {
        screen.innerHTML += event.key;
        return parseFloat(screen.innerHTML);
      }
      break;
    case "8":
      if (screen.innerHTML.length > 20) {
        alert("Too many numbers");
      } else {
        screen.innerHTML += event.key;
        return parseFloat(screen.innerHTML);
      }
      break;
    case "9":
      if (screen.innerHTML.length > 20) {
        alert("Too many numbers");
      } else {
        screen.innerHTML += event.key;
        return parseFloat(screen.innerHTML);
      }
      break;
    case "0":
      if (screen.innerHTML.length > 20) {
        alert("Too many numbers");
      } else {
        screen.innerHTML += event.key;
        return parseFloat(screen.innerHTML);
      }
      break;
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
        screen.innerHTML += event.key;
      }
      break;
    case "Backspace":
      screen.innerHTML = "";
      break;
    case "Delete":
      screen.innerHTML = "";
      plusStatus = false;
      minusStatus = false;
      multStatus = false;
      divideStatus = false;
      break;
    case "Enter":
      result();
    default:
      break;
  }
  console.log(event.key);
});

function captureScreen(prmt) {
  switch (prmt.value) {
    case "1":
      if (screen.innerHTML.length > 20) {
        alert("Too many numbers");
      } else {
        screen.innerHTML += prmt.value;
        return parseFloat(screen.innerHTML);
      }
      break;
    case "2":
      if (screen.innerHTML.length > 20) {
        alert("Too many numbers");
      } else {
        screen.innerHTML += prmt.value;
        return parseFloat(screen.innerHTML);
      }
      break;
    case "3":
      if (screen.innerHTML.length > 20) {
        alert("Too many numbers");
      } else {
        screen.innerHTML += prmt.value;
        return parseFloat(screen.innerHTML);
      }
      break;
    case "4":
      if (screen.innerHTML.length > 20) {
        alert("Too many numbers");
      } else {
        screen.innerHTML += prmt.value;
        return parseFloat(screen.innerHTML);
      }
      break;
    case "5":
      if (screen.innerHTML.length > 20) {
        alert("Too many numbers");
      } else {
        screen.innerHTML += prmt.value;
        return parseFloat(screen.innerHTML);
      }
      break;
    case "6":
      if (screen.innerHTML.length > 20) {
        alert("Too many numbers");
      } else {
        screen.innerHTML += prmt.value;
        return parseFloat(screen.innerHTML);
      }
      break;
    case "7":
      if (screen.innerHTML.length > 20) {
        alert("Too many numbers");
      } else {
        screen.innerHTML += prmt.value;
        return parseFloat(screen.innerHTML);
      }
      break;
    case "8":
      if (screen.innerHTML.length > 20) {
        alert("Too many numbers");
      } else {
        screen.innerHTML += prmt.value;
        return parseFloat(screen.innerHTML);
      }
      break;
    case "9":
      if (screen.innerHTML.length > 20) {
        alert("Too many numbers");
      } else {
        screen.innerHTML += prmt.value;
        return parseFloat(screen.innerHTML);
      }
      break;
    case "0":
      if (screen.innerHTML.length > 20) {
        alert("Too many numbers");
      } else {
        screen.innerHTML += prmt.value;
        return parseFloat(screen.innerHTML);
      }
      break;
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

// Theme
let themeBtn = document.getElementById("themefield");
let calcName = document.getElementById("calcName");
let calcTheme = document.getElementById("calcTheme");
let calcSelector = document.getElementById("calcSelector");

themeBtn.addEventListener("click", changeTheme);

function changeTheme() {
  if (themeBtn.className == "theme__button1") {
    themeBtn.className = "theme__button2";
    setTheme("theme2");
    calcName.className = "calculator__name";
    calcTheme.className = "calculator__theme";
    calcSelector.className = "theme__selector";
    screen.className = "calculator__display";
  } else if (themeBtn.className == "theme__button2") {
    themeBtn.className = "theme__button3";
    setTheme("theme3");
    calcName.className = "calculator__name";
    calcTheme.className = "calculator__theme";
    calcSelector.className = "theme__selector";
    screen.className = "calculator__display";
  } else if (themeBtn.className == "theme__button3") {
    themeBtn.className = "theme__button1";
    setTheme("theme1");
    calcName.className = "calculator__name-theme1";
    calcTheme.className = "calculator__theme-theme1";
    calcSelector.className = "theme__selector-theme1";
    screen.className = "calculator__display-theme1";
  }
}

// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}

// Immediately invoked function to set the theme on initial load
(function () {
  if (localStorage.getItem("theme") === "theme1") {
    setTheme("theme1");
  } else if (localStorage.getItem("theme") === "theme2") {
    setTheme("theme2");
  } else {
    setTheme("theme3");
  }
})();
