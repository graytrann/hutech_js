// Write a JavaScript program to check whether a given integer is within 20 of 100 or
// 400.
function check() {
  let num = document.getElementById("input").value;
  let tmp = 0;

  if (num <= 100) {
    tmp = 100 - num;
    if (tmp <= 20) {
      alert("OK");
      return;
    }
  } else if (num > 100 && num <= 400) {
    tmp = 400 - num;
    if (tmp <= 20) {
      alert("OK");
      return;
    }
  }
  alert("NOT OK");
  return;
}
