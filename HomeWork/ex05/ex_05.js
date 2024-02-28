// Write a JavaScript program to rotate the string 'w3resource' in the right direction.
// This is done by periodically removing one letter from the string end and attaching it to the front.
var string = "w3resource";
var result = [];
for (let i = string.length - 1; i > -1; i--) {
  result.push(string[i]);
}

console.log("before rorate:", string);
console.log("after rorate:", result.join(""));
