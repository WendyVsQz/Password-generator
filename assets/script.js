// Background animation
document.body.addEventListener("pointermove", (e)=>{
  const { currentTarget: el, clientX: x, clientY: y } = e;
  const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
  el.style.setProperty('--posX',  x-l-w/2);
  el.style.setProperty('--posY',  y-t-h/2);
})

// TODO: 
//1. When I click the generate button I want to prompt a couple of question 
//regarding the password of choice. 
//2. I want to function the generator according to the given prompt answers. 
//3. I want to function the copy button.
//------------------------//
let uppercase_chars=[
  'A','B','C', 'D', 'E', 'F',
  'G','H','I','J', 'K', 'L',
  'M','N','O','P', 'Q', 'R',
  'S','T','U','V','W', 'X',
  'Y', 'Z'
];
let lowercase_chars=[
  'a','b','c','d','e','f',
  'g','h','i','j','k','l',
  'm','n','o','p','q','r',
  's','t','u','v','w','x',
  'y','z'
];
let numbers_chars=[
  '0', '1', '2', '3', '4', '5',
  '6', '7', '8', '9'
];
let symbols_chars=[
  '@','%','+','\\','/',"'",
  '!','#','$','^','?',':',
  ',', ')', '(','}','{',']',
  '[','~','-','_','.'];

  let userOptions = [
    symbols_chars, uppercase_chars,
    lowercase_chars,numbers_chars,
  ]

  let passwordChoices= [];
  let passwordLength= [];
  //---------------------------//
  const generateBtn = document.querySelector('#generate');
  //----------------------------//
  
  // 1. prompt the user
  function generatePassword() {
    
    console.log("button clicked!");
    // a. passwrod length
    let passwordLength = parseInt(prompt("Please enter the number of characters you want for your new password.  It must be more than 12 but less than 128."));
    if (passwordLength >= 12 && passwordLength <= 128) {
      passwordChoices.push(passwordLength);

        // b. numbers
        let numbers = confirm("Do you want numbers in your password?");
        if (numbers === true) {
        passwordChoices.push(numbers_chars);
        }

        // c. lowercase
        let lowerCases = confirm("Do you want lowercases in your password?");
        if (lowerCases === true) {
          passwordChoices.push(lowercase_chars);
        }

        // d. uppercase
        let upperCases = confirm("Do you want uppercases in your password?");
        if (upperCases === true) {
          passwordChoices.push(uppercase_chars)
        }
        // e. symbols
        let special = confirm("Do you want special characters in your password?");
        if (special === true) {
          passwordChoices.push(symbols_chars)
        }
      } else alert("refresh to try again");
    return userOptions;
  }
  //checks to see if choices have been logged properly
console.log(passwordChoices);
//console.log(passwordchoices);


  //call function
  generatePassword();

// 2. validate the input
/* 
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
} */

/* var randomPasswordGenerated = ""; 

for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
  var randomNumberPicked = Math.floor(Math.random() * 4);

  randomPasswordGenerated += randomNumberPicked;

}
randomPasswordGenerated += minimumNumbers;
randomPasswordGenerated += minimumLowerCases;
randomPasswordGenerated += minimumUpperCases;
randomPasswordGenerated += minimumSpecialCharacters;
// 3. display password to the page
return randomPasswordGenerated;

// Empty minimums for numbers, lowerCases, upperCases & specialCharacters

var minimumNumbers = "";
var minimumLowerCases = "";
var minimumUpperCases = "";
var minimumSpecialCharacters = "";
 */
//----------------------------
// button function
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function syncLength() {
  const value = e.target.value
  passwordLength.value = value
  passwordLength.value = value
}
// add event listener
generateBtn.addEventListener("click", writePassword);

//-------------------------------//
var copyBtn = document.querySelector('#copy');
//-------------------------------//
//copy function
async function copyPassword(){

}