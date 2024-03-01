// Write a JavaScript program to check two given integers whether one is positive
// and another one is negative.
function check() {
  let num1 = document.getElementById("input_1").value;
  let num2 = document.getElementById("input_2").value;

  if (num1 > 0 && num2 < 0) {
    alert("Number 1 is Positive, Number 2 is Negative");
    return;
  } else if (num1 < 0 && num2 > 0) {
    alert("Number 1 is Negative, Number 2 is Positive");
    return;
  }

  alert("do not meet the conditions");
}
