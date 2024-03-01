// Write a JavaScript program to compute the sum of the two given integers. If the
// two values are the same, then return triple their sum.
function calculate() {
  let num1 = +document.getElementById("input_1").value;
  let num2 = +document.getElementById("input_2").value;
  let result = 0;
  if (num1 == num2) {
    result = num1 * 3;
    alert(result);
  } else {
    result = num1 + num2;
    alert(result);
  }
}
