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


function generatePassword() {
  // prompt how many charactets
  var charCount = prompt("How many characters would you like your password to use?");
  charCount = parseInt(charCount);
  if (isNaN(charCount) || charCount < 8 || charCount > 128) {
    alert("Please enter a valid number between 8 and 128.");
    return "";
  }
  // var for charcters
var includeSpecial = confirm("Do you want to use special characters?");
var includeNumbers = confirm("Do you want to use numbers?");
var includeUppercase = confirm("Do you want to use uppercase letters?");
var includeLowercase = confirm("Do you want to use lowercase letters?");
if(!includeSpecial && !includeNumbers && !includeUppercase && !includeLowercase) {
  alert("Please select at least one character type");
  return "";
}

// What types of charctyers
// special, number, upper, lower
var specialChars = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var numberChars = "012345678";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";

// concstenate the strings together using addition assignments"
var allChars = ""

if (includeSpecial) {
  allChars += specialChars;
}

if (includeNumbers) {
  allChars += numberChars;
}

if (includeUppercase) {
  allChars += uppercaseChars;
}

if (includeLowercase) {
  allChars += lowercaseChars;
}

// 
var password = "";
for (var i = 0; i <charCount; i++) {
  var randomChar = allChars.charAt(Math.floor(Math.random() * allChars.length));
  password += randomChar;
}
  

// return password;
return password;
}
