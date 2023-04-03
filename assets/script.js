
// Array of special characters to be included in password
let specialCharacters = [
  '@','%','+','\\','/',"'",
  '!','#','$','^','?',':',
  ',', ')', '(','}','{',']',
  '[','~','-','_','.'
];

// Array of numeric characters to be included in password
let numericCharacters = [
  '0', '1', '2', '3', '4', '5',
  '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
  'a','b','c','d','e','f',
  'g','h','i','j','k','l',
  'm','n','o','p','q','r',
  's','t','u','v','w','x',
  'y','z'
];

// Array of uppercase characters to be included in password
let upperCasedCharacters = [
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
const generateBtn = document.querySelector('#generate');
const copyBtn = document.querySelector('#copy');
//----------------------------//
//generator function
function generatePassword() {
console.log("hey! you clicked the button");

// 1. prompt the user
   // a. passwrod length
   // b. lowercase, uppercase, symbols & numbers
// 2. validate the input
// 3. generate password

// 4. display password to the page
return "password generated!";
}
//----------------------------
// button function
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// add event listener
generateBtn.addEventListener("click", writePassword);
//-------------------------------
//copy function
async function copyPassword(){

}