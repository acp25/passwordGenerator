// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//This function generates a random password based upon user prompts
function generatePassword() {
  
  var generatedPassword = "";

  var numericCharacters = "0123456789";
  var specialCharacters = "!@#$%^&*()-=+_`~";
  var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  
  

  var requiredCharactersString = "";

  //Prompts the user to select a number between 8-128
  var passwordLength = prompt(
    "How many characters would you like in your password? \n(Please enter a number between 8-128)"
  );

  //Prompts the user to enter a new value if length is not between 8-128
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt(
      "The password must be between 8 and 128 characters. \nPlease select a number between 8-128."
    );
  }

  //Asks the user to confirm if numbers characters must be included
  var includeNumeric = confirm("Do you want to include numeric characters?");
 if (includeNumeric) {
    requiredCharactersString = requiredCharactersString.concat(
      numericCharacters
    );
  }

  //Asks the user to confirm if special characters must be included
  var includeSpecial = confirm("Do you want to include special characters?");
if (includeSpecial) {
    requiredCharactersString = requiredCharactersString.concat(
      specialCharacters
    );
  }

  //Asks the user to confirm if uppercase characters must be included
  var includeUpperCase = confirm(
    "Do you want to include uppercase characters?"
  );
 if (includeUpperCase) {
    requiredCharactersString = requiredCharactersString.concat(
      upperCaseCharacters
    );
  }

for (var i = 0; i < passwordLength; i++) {
    var random = Math.floor(Math.random() * requiredCharactersString.length);

    generatedPassword = generatedPassword.concat(
      requiredCharactersString.charAt(random)
    );
  }

  return generatedPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






