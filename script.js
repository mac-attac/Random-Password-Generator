// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function correctLength() {
  var lengthPassword = prompt("How many characters between 8 and 128 would you like?")

  if (lengthPassword >= 8 && lengthPassword <=128) {
    return true;
  } else {
    alert("You do not have the required number of characters")
    correctLength()
  }
}

//created function generate password
function generatePassword() {
//add variables
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
//add prompts for password criteria

//length of password
correctLength()

// //lowercase prompt
// var lowercase = confirm("Would you like lowercase letters included?")

// if (true) {
//   //include lowercase letters
//   Math.random() * lowercase.length
// } else //do not include lowercase letters

// //uppercase prompt
// var uppercase = confirm("Would you like uppercase letters included?")

// if (true) {
//   //include uppercase letters
// } else //do not include lowercase letters

// //numeric prompt
// var numeric = confirm("Would you like numbers included?")

// if (true) {
//   //include numbers letters
// } else //do not include lowercase letters

// //special characters prompt
// confirm("Would you like special characters included?")

// if (true) {
//   //include lowercase letters
// } else //do not include lowercase letters


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
