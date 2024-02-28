// Write a JavaScript program to determine whether a given year is a leap year in the
// Gregorian calendar.

// program to check leap year
function checkLeapYear(year) {
  const leap = new Date(year, 1, 29).getDate() === 29;
  if (leap) {
    console.log(year + " is a leap year");
  } else {
    console.log(year + " is not a leap year");
  }
}

// take input
const year = 2024;

checkLeapYear(year);
