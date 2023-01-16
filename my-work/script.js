// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

  var exitBtn = document.getElementById("exitBtn");
  exitBtn.addEventListener("click", password);

  function password(){
    var realPw = "<?php echo $pw?>";
    var pw= prompt("Please enter your password");
  if(realPw == pw) {
    self.location = "LoginBox.php"
    }
  }
return;
}
console.log("getPasswordOptions")

// Function for getting a random element from an array

var functionArray = {
  getNumericalCharacters: function() {
  return String.fromCharCode(Math.floor(Math.random()*10 + 48 ));
  },
  getLowerCases: function() {
  return String.fromCharCode(Math.floor(Math.random()* 26 + 97));
  },
  getUpperCases: function() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
  },

  getSpecialCharacters: function() {
    return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
  }
}

// Function to generate password with user input 
//ask for length
var length = prompt("How many characters will your password be? Enter a number between 8 and 128");

//ask for character type
var charType = prompt("Enter a character type: special, numeric, uppercase, lowercase.");


//generate password
function generatePassword() {
  //evaluate character type
  var charSet = "";
  if( charType.toLowerCase === "lowercase" ) {
    charSet = "abcdefghijklmnopqrstuvwxyz";
  } else if( charType.toLowerCase === "uppercase" ) {
    charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if( charType.toLowerCase === "numeric" ) {
    charSet = "0123456789";
  } else if( charType.toLowerCase === "special" ) {
    charSet = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } 
  //return value
  var retVal = "";
    //for (var i = 0, n = charSet.length; i < length; i++) {
    for (var i = 0, n = length; i < length; i++) {
    //picks a character within charSet at index of random number
    retVal += charSet.charAt(Math.floor(Math.random() * n));
  }
  console.log(retVal);
  return retVal;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');


  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

function generatePassword() {
  var passwordLength = prompt("Please enter the number of characters you want for your new password.  It must be more than 12 but less than 128.");

  var numbers = confirm("Do you want numbers in your password?");

  var lowerCases = confirm("Do you want lowercases in your password?");

  var upperCases = confirm("Do you want uppercases in your password?");

  var special = confirm("Do you want special characters in your password?");

  // this is a minimum count for numbers, lowerCases, upperCases & specialCharacters
  if (numbers === true) {
    minimumNumbers = functionArray.getNumbers();
    minimumCount++;

  }

  if (lowerCases === true) {
    minimumLowerCases = functionArray.getLowerCases();
    minimumCount++;

  }

  if (upperCases === true) {
    minimumUpperCases = functionArray.getUpperCases();
    minimumCount++;

  }

  if (special === true) {
    minimumSpecialCharacters = functionArray.getSpecialCharacters();
  }
  var randomPasswordGenerated = "";

  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);

    randomPasswordGenerated += randomNumberPicked;

  }
  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;
  return randomPasswordGenerated;
}
console.log(generatePassword);

  // Empty minimums for numbers, lowerCases, upperCases & specialCharacters

  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";


  // Generator functions**
    // to make sure characters are added to the password
function check_form() {
  var passw = document.getElementById('password-input-0').value;
  var passw2 = document.getElementById('password-input-1').value;
  var letter = /[a-zA-Z]/;
  var number = /[0-9]/;

  if (passw.length < 6 || passw != passw2 || !letter.test(passw) || !number.test(passw)) {
      if (passw.length < 6) {
          alert("Please make sure password is longer than 6 characters.")
          return false;
      }
      if (passw != passw2) {
          alert("Please make sure passwords match.")
          return false;
      }
      if (!letter.test(passw)) {
          alert("Please make sure Password Includes an UpperCase and LowerCase character")
          return false;
      }
      if (!number.test(passw)) {
          alert("Please make sure Password Includes a Digit")
          return false;
      }

      /*email test*/
      var email = document.getElementById('email-input-0').value;
      var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (!filter.test(email)) {
          alert('Please provide a valid email address');
          form.email.focus;
          return false;
      }


      return true;
  }
}
