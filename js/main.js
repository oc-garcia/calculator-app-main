let btns = document.querySelectorAll("button.calculator__button");
let screen = document.getElementById("screen");
let resetBtn = document.getElementById("reset");
let plus = document.getElementById("btn-plus");
let equal = document.getElementById("btn-equal");
let x = sum();
let y;

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => captureScreen(btns[i]));
}

resetBtn.addEventListener("click", reset);
plus.addEventListener("click", sum);
equal.addEventListener("click", result);

function reset() {
  screen.innerHTML = "";
  /* NÃO FUNCIONOU AINDA.
  if (x != NaN) {
    console.log(x)
    return sum(0);
  }
  */
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
      x = parseFloat(screen.innerHTML);
      screen.innerHTML = "";
      sum(x);
    default:
      break;
  }
}

function sum(x) {
  return x;
}

function result() {
  if (x != NaN) {
    y = parseFloat(screen.innerHTML);
    z = x + y;
    screen.innerHTML = z;
  }
}
