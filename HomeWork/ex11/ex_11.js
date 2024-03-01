// Write a JavaScript program to convert temperatures to and from Celsius,
// Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in
// Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C
function CtoF() {
  let value = document.getElementById("input_1").value;
  let result = 0;
  result = (9 / 5) * value + 32;
  alert(result);
  document.getElementById("input_1").value = "";
}

function FtoC() {
  let value = document.getElementById("input_2").value;
  let result = 0;
  result = (5 / 9) * (value - 32);
  alert(result);
  document.getElementById("input_2").value = "";
}
