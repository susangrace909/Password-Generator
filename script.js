// global variables //
var length = "";
var password = "";
var characters = "";
var requiredChars = "";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numeric = "1234567890";
var specialChars = "!@#$%^&*()";

// length prompt //
function pwPrompt() {
  length = prompt(
    "How many characters will your password have? Must be 8-128 characters."
  );
  if (length < 8 || length > 128) {
    window.alert("Password must be between 8 and 128 characters.");
    pwPrompt();
  }
  if (isNaN(length)) {
    window.alert("Password must be a number.");
    return pwPrompt();
  }
}

// uppercase prompt //
function uppercase() {
  var uppercase = "";
  uppercase = prompt("Would you like to include uppercase letters? Yes or no.");
  uppercase = uppercase.toLowerCase();
  if (uppercase === "yes") {
    var randomNum = Math.floor(Math.random() * uppercase.length);
    characters += uppercase;
    required += uppercase.charAt(randomNum);
  } else if (uppercase === "no") {
    characters = characters;
  } else {
    alert("Must be yes or no.");
    uppercase();
  }
}

// lowercase prompt //
function lowercase() {
  var lowercase = "";
  lowercase = prompt("Would you like include lowercase letters? Yes or no.");
  lowercase = lowercase.toLowerCase();
  if (lowercase === "yes") {
    var randomNum = Math.floor(Math.random() * lowercase.length);
    characters += lowercase;
    requiredChars += lowercase.charAt(randomNum);
  } else if (lowercase === "no") {
    characters = characters;
  } else {
    alert("Must be yes or no.");
    lowercase();
  }
}

// numeric prompt //
function numeric() {
  var numeric = "";
  numeric = prompt("Would you like to include numbers? Yes or no.");
  numeric = numeric.toLowerCase();
  if (numeric === "yes") {
    var randomNum = Math.floor(Math.random() * numeric.length);
    characters += numeric;
    requiredChars += numeric.charAt(randomNum);
  } else if (numeric === "no") {
    characters = characters;
  } else {
    alert("Must be yes or no.");
    numeric();
  }
}

// special characters prompt //
function specialChars() {
  var specialChars = "";
  specialChars = prompt(
    "Would you like to include special characters? Yes or no."
  );
  specialChars = specialChars.toLowerCase();
  if (specialChars === "yes") {
    var randomNum = Math.floor(Math.random() * specialChars.length);
    characters += specialChars;
    requiredChars += specialChars.charAt(randomNum);
  } else if (specialChars === "no") {
    characters = characters;
  } else {
    alert("Must be yes or no.");
    specialChars();
  }
}

// Must pick one //
function bareMinimum() {
  var bareMinimum1 = requiredChars.length;
  if (bareMinimum1 < 1) {
    alert("You must pick at least one type of character to include.");
    generatePassword();
  }
}

// Generator using critera above //
function generatePassword() {
  pwPrompt();
  uppercase();
  lowercase();
  numeric();
  specialChars();
  bareMinimum();
  bareMinimum1();
  var allChars = length - requiredChars.length;
  for (var i = 0; i <= allChars; i++) {
    var randomNum = Math.floor(Math.random() * characters.length);
    password += characters.substring(randomNum, randomNum + 1);
  }
  password += requiredChars;
  return password;
}

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
