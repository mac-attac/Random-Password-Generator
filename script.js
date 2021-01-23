// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
//function for prompts for password criteria
function userInput() {
  var lengthPassword = prompt("How many characters between 8 and 128 would you like?")

  if (lengthPassword >= 8 && lengthPassword <=128) {
    true;
  } else {
    alert("You do not have the required number of characters")
    userInput()
  }
  var lower = confirm("Would you like lowercase letters included?")
  var upper = confirm("Would you like uppercase letters included?")
  var numeric= confirm("Would you like numbers included?")
  var special = confirm("Would you like special characters included?")
  
  //if no characters were specified, run it again
  if (!lower && !upper && !numeric && ! special) {
    alert("You did not choose any characters! Feel free to start over!")
    userInput()
  }
  //answers stored here in object
  var userAnswers = {
    length : lengthPassword,
    wantsUpper : upper,
    wantsLower : lower,
    wantsNumeric : numeric,
    wantsSpecial : special,
  }
  return userAnswers
}
  
//function for getting random strings from arrays
function getRandom (arr) {
    var randomIndex= Math.floor(Math.random() * arr.length);
    return arr[randomIndex]
}
  
  
//created function generate password for integrating user input into functions for output
function generatePassword() {
    //add variables
  var options = userInput()
  var chars = {
  lower : "abcdefghijklmnopqrstuvwxyz".split(""),
  upper : "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
  num : "0123456789".split(""),
  spec : "!#$%&'()*+,-./:;<=>?@[^_`{|}~".split(""),
  }

  //empty arrays for adding desired characters and then final result
  var result = []
  var possibleChars = []

  //create if statements to append desired characters onto result
  if (options.wantsLower) {
    possibleChars = possibleChars.concat(chars.lower);
  }
  
  if (options.wantsUpper) {
    possibleChars = possibleChars.concat(chars.upper);
  }
  if (options.wantsNumeric) {
    possibleChars = possibleChars.concat(chars.num);
  }
    if (options.wantsSpecial) {
    possibleChars = possibleChars.concat(chars.spec);
  }
  
  //while loop to append random desired characters to desired length
  while (result.length < options.length) {
    result.push(getRandom(possibleChars))
  }


  return result.join("")
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
