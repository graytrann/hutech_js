// Write a JavaScript program to get the difference between a given number and 13,
// if the number is broader than 13 return double the absolute difference.
function getDifference(num) {
  var difference = Math.abs(num - 13);

  if (num > 13) {
    return difference * 2;
  } else {
    return difference;
  }
}

function calculate() {
  let num = document.getElementById("input").value;
  let result = getDifference(num);
  alert(result);
}
