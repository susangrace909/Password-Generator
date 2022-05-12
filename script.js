// global variables //
var pwLength = "";
var password = "";
var characters = "";
var requiredChars = "";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numeric = "1234567890";
var specialChars = "!@#$%^&*()";

// length prompt //
function pwPrompt() {
  pwLength = prompt(
    "How many characters will your password have? Must be 8-128 characters."
  );
  if (pwLength >= 8 && pwLength <= 128 && !isNaN(pwLength)) {
    isUppercase();
  }

  if (pwLength < 8 || pwLength > 128) {
    window.alert("Password must be between 8 and 128 characters.");
    pwPrompt();
  }
  if (isNaN(pwLength)) {
    window.alert("Password must be a number.");
    pwPrompt();
  }
}

// uppercase prompt //
function isUppercase() {
  var upperQues = prompt(
    "Would you like to include uppercase letters? Yes or no."
  );
  upperQues = upperQues.toLowerCase();
  if (upperQues === "yes") {
    var randomNum = Math.floor(Math.random() * uppercase.length);
    characters += uppercase;
    requiredChars += uppercase.charAt(randomNum);
    isLowercase();
  } else if (upperQues === "no") {
    characters = characters;
    isLowercase();
  } else {
    alert("Must be yes or no.");
    isUppercase();
  }
}

// lowercase prompt //
function isLowercase() {
  var lowerQues = prompt(
    "Would you like include lowercase letters? Yes or no."
  );
  lowerQues = lowerQues.toLowerCase();
  if (lowerQues === "yes") {
    var randomNum = Math.floor(Math.random() * lowercase.length);
    characters += lowercase;
    requiredChars += lowercase.charAt(randomNum);
    isNumeric();
  } else if (lowerQues === "no") {
    characters = characters;
    isNumeric();
  } else {
    alert("Must be yes or no.");
    isLowercase();
  }
}

// numeric prompt //
function isNumeric() {
  var numericQues = prompt("Would you like to include numbers? Yes or no.");
  numericQues = numericQues.toLowerCase();
  if (numericQues === "yes") {
    var randomNum = Math.floor(Math.random() * numeric.length);
    characters += numeric;
    requiredChars += numeric.charAt(randomNum);
    specChars();
  } else if (numericQues === "no") {
    characters = characters;
    specChars();
  } else {
    alert("Must be yes or no.");
    isNumeric();
  }
}

// special characters prompt //
function specChars() {
  var specialCharsQues = prompt(
    "Would you like to include special characters? Yes or no."
  );
  specialCharsQues = specialCharsQues.toLowerCase();
  if (specialCharsQues === "yes") {
    var randomNum = Math.floor(Math.random() * specialChars.length);
    characters += specialChars;
    requiredChars += specialChars.charAt(randomNum);
    bareMinimum();
  } else if (specialCharsQues === "no") {
    characters = characters;
    bareMinimum();
  } else {
    alert("Must be yes or no.");
    specChars();
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
  var allChars = pwLength - requiredChars.length;
  for (var i = 0; i <= allChars - 1; i++) {
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
