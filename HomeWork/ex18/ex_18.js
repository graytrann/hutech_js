// Write a JavaScript program to check a pair of numbers and return true if one of
// the numbers is 50 or if their sum is 50.

function check() {
  let num1 = +document.getElementById("input_1").value;
  let num2 = +document.getElementById("input_2").value;
  let sum = num1 + num2;
  if (num1 === 50 || num2 === 50 || sum === 50) {
    console.log(true);
    return;
  }
  console.log(false);
  return;
}
