// Write a JavaScript program to compute the absolute difference between a
// specified number and 19. Returns triple the absolute difference if the specified
// number is greater than 19.

// Write a JavaScript program to get the difference between a given number and 13,
// if the number is broader than 13 return double the absolute difference.
function getDifference(num) {
  var difference = Math.abs(num - 19);

  if (num > 19) {
    return Math.pow(difference, 3);
  } else {
    return difference;
  }
}

function calculate() {
  let num = document.getElementById("input").value;
  let result = getDifference(num);
  alert(result);
}
