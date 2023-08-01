let inputVal = document.querySelectorAll("#btns");
let pattern = /[+\-\*\/]/;

function addBinary(a, b) {
  let decimalA = parseInt(a, 2);
  let decimalB = parseInt(b, 2);
  let sum = decimalA + decimalB;
  return sum.toString(2);
}
function subBinary(a, b) {
  let decimalA = parseInt(a, 2);
  let decimalB = parseInt(b, 2);
  let difference = decimalA - decimalB;
  return difference.toString(2);
}
function mulBinary(a, b) {
  let decimalA = parseInt(a, 2);
  let decimalB = parseInt(b, 2);
  let multiply = decimalA * decimalB;
  return multiply.toString(2);
}
function divBinary(a, b) {
  let decimalA = parseInt(a, 2);
  let decimalB = parseInt(b, 2);
  if (decimalB == 0) {
    return "Error";
  }
  let division = decimalA / decimalB;
  return division.toString(2);
}

inputVal.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    console.log(e.target.innerHTML);
    let value = e.target.innerHTML;
    let res = document.querySelector("#res");

    if (value == "C") {
      res.innerHTML = "";
    } else if (value == "=") {
      let [a, b] = res.innerHTML.split(pattern);
      // let operator = pattern.test(res.innerHTML);
      let operator = res.innerHTML.match(pattern)[0];

      console.log(a, b, operator);

      switch (operator) {
        case "+":
          res.innerHTML = addBinary(a, b);
          break;
        case "-":
          res.innerHTML = subBinary(a, b);
          break;
        case "*":
          res.innerHTML = mulBinary(a, b);
          break;
        case "/":
          res.innerHTML = divBinary(a, b);
          break;
      }
      // res.innerHTML = value;
    } else {
      res.innerHTML += value;
    }
    // document.querySelector('#res').value = value;
  });
});
