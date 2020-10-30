// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


let Length = prompt('How many charactoers do you want in your password?')
let maxLength = document.getElementById(Length);

// for (var l = 0; l< maxLength; l++)
// Add random uppercase alphabet
let up = confirm('Do you want uppercase alphabet in your password?')
console.log(up = true);
if (up === true)
{
function upperCase() {
  var upper = "";
  var Cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (var i = 0; i < 1; i++)
    upper += Cap.charAt(Math.floor(Math.random() * Cap.length));

  return upper;
}

console.log(upperCase());
}

// Add random lowercase alphabet
// let lower = confirm('Do you want uppercase alphabet in your password?')
// // If up = 'true'

// Add random lowercase alphabet
// function lowerCase() {
//   var lower = "";
//   var Cap = "abcdefghijklmnopqrstuvwxyz";

//   for (var i = 0; i < 1; i++)
//     lower += Cap.charAt(Math.floor(Math.random() * Cap.length));

//   return lower;
// }

// console.log(lowerCase());