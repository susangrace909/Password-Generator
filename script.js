// base variables //
var password = "";
var characters = "";
var requiredcharacters = "";

// lenth of password 8-128 characters//
var length = "";

// character types//
var lowercase = "";
var uppercase = "";
var numeric = "";
var specialcharacters = "";

// length prompt //

// lowercase prompt //

// uppercase prompt //

// numeric prompt //

// special characters prompt //

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
