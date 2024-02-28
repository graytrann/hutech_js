// Format the date as mm-dd-yyyy and log it
var today = new Date();
var mm = today.getMonth();
var dd = today.getDate();
var yyyy = today.getFullYear();

result = mm + "-" + dd + "-" + yyyy;
console.log(result);
