// Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.

function checkSunday(year) {
  const date = new Date(year, 0, 1).getDay();

  if (date == 6 || date == 0) {
    console.log(`1st January of ${year} is Sunday`);
  }
}

for (i = 2014; i <= 2050; i++) {
  checkSunday(i);
}
