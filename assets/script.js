
// Array of special characters to be included in password
var specialCharacters = [
  '@','%','+','\\','/',"'",
  '!','#','$','^','?',':',
  ',', ')', '(','}','{',']',
  '[','~','-','_','.'
];

// Array of numeric characters to be included in password
var numericCharacters = [
  '0', '1', '2', '3', '4', '5',
  '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a','b','c','d','e','f',
  'g','h','i','j','k','l',
  'm','n','o','p','q','r',
  's','t','u','v','w','x',
  'y','z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A','B','C', 'D', 'E', 'F',
  'G','H','I','J', 'K', 'L',
  'M','N','O','P', 'Q', 'R',
  'S','T','U','V','W', 'X',
  'Y', 'Z'
];

// TODO: 
//1. When I click the generate button I want to prompt a couple of question 
//regarding the password of choice. 
//2. I want to function the generator according to the given prompt answers. 
//3. I want to function the copy button.
//---------------------------//
const password = document.querySelector('#password');
const generateBtn = document.querySelector('#generate');
const copy_btn = document.querySelector('#copy');
//----------------------------//
//generator function
function generatePassword() {
console.log("hey! you clicked the button");

return "password generated";
}
//----------------------------
// button function
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);
//-------------------------------
//copy function
async function copyPassword(){

}