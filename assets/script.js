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

  //Array of characters
  let userOptions = [
    symbols_chars, uppercase_chars,
    lowercase_chars,numbers_chars,
  ]
  //Empty arrays
  let passwordChoices= [];
  let passwordLength= [];
  //---------------------------//
  const generateBtn = document.querySelector('#generate');
  //----------------------------//
  
  // 1. prompt the user
  function getPasswordOptions() {
    // a. passwrod length
    let passwordLength = parseInt(prompt("Please enter the number of characters you want for your new password.  It must be more than 10 but less than 128."));
    if (passwordLength >= 10 && passwordLength <= 128) {
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

      if (passwordChoices.length === 0) return;
      
      for (var i = 0; i<passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * passwordChoices.length);
      var random = passwordChoices[randomIndex];
      userOptions = userOptions.concat(random)
      }
    return userOptions;
  }
  //checks to see if choices have been logged properly
  const resp = getPasswordOptions();
  console.log(`Password :::> ${resp} | length :::> ${resp.length}`);
//console.log(passwordChoices);
//console.log(passwordchoices);

// create new variable out of paswordChoices[0] - (password length) 
let charCount = passwordChoices[0];
//checks if working.
//console.log(charCount);
//now on to create new array, by concating the remaining choices together.
let choice1 = passwordChoices[1];
let choice2 = passwordChoices[2];
let choice3 = passwordChoices[3];
let choice4 = passwordChoices[4];
let joinedArray = choice1.concat(choice2, choice3, choice4);
//deletes undefined and returns a new array called finalCharacterChoice
// check joinedArray
//console.log(joinedArray);
let finalCharacterChoice = joinedArray.filter(function (element) {
  return element !== undefined;
});
//check to see if working
//console.log(finalCharacterChoice);
// Function for getting a random element from an array
function shuffleArr (arr) {
   const randomIndex =  Math.floor(Math.random() * arr.length);

  const item =  arr[randomIndex];

  return item;
  }



let randlower = shuffleArr(lowercase_chars)

let randupper = shuffleArr(uppercase_chars)

let randnumber = shuffleArr(numbers_chars)

let randspecial = shuffleArr(symbols_chars)

const rand=[randlower, randupper, randnumber,randspecial]

shuffleArr(rand) 
console.log(rand)

//check to see if function is working
//console.log(getRandom(finalCharacterChoice));

//creating a function to randomly shuffle my password after generating
// Function to generate password with user input. Running for loop for the length specified in CharCount.
function generatePassword() {
  password = ''
  for (i = 0; i < charCount; i++) {
    password += shuffleArr(finalCharacterChoice);
    //shuffle(password)
    
  }
  return password
 // return password;
}
console.log(finalCharacterChoice);
let password = [];
generatePassword();

//check to see if working

//----------------------------
// button function
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// add event listener
generateBtn.addEventListener("click", writePassword);

