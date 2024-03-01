// Write a JavaScript exercise to create a variable using a user-defined name.
function createVariable() {
  var variableName = document.getElementById("input_1").value;
  var variableValue = document.getElementById("input_2").value;

  createVariableWithNameAndValue(variableName, variableValue);
}

function createVariableWithNameAndValue(name, value) {
  eval(name + " = " + JSON.stringify(value));
  console.log("Created variable '" + name + "' with value: " + value);
}
