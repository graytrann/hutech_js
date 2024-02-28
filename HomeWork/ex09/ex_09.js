// Write a JavaScript program to calculate the days left before Christmas.

var days = 0;
function checkLeapYear(year) {
  const leap = new Date(year, 1, 29).getDate() === 29;
  if (leap) {
    days = 366;
  } else {
    days = 365;
  }
}

checkLeapYear(2024);

var daysLeft = days - 7;
console.log("Days left before Christmast :", daysLeft);
