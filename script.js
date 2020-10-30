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

// Add random uppercase alphabet
let maxLength = prompt('How many charactoers do you want in your password?')
let maxLength = document.getElementById(maxLength);
let up = prompt('Do you want uppercase alphabet in your password?')
If up = true
function upperCase() {
  var upper = "";
  var Cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (var i = 0; i < maxLength; i++)
    upper += Cap.charAt(Math.floor(Math.random() * Cap.length));

  return upper;
}

console.log(upperCase());

// Add random lowercase alphabet
function lowerCase() {
  var lower = "";
  var Cap = "abcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < 5; i++)
    lower += Cap.charAt(Math.floor(Math.random() * Cap.length));

  return lower;
}

console.log(lowerCase());