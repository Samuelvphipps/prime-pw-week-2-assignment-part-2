// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable calls 'name' and give it a string value of 'Dane'
// We create a condition statement to check if name is equal to 'Mary'
// Since 'Dane' does not equal 'Mary' the else statement runs, and the console logs 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We create an undefined variable 'secret'
// We create a variable 'code' with a value of 123
// conditional statement that if the code is equal in type and value to 123 secret will be 'super' and code will multiply by 2
// since code does equal 123 the value of secret is now 'super' and the value of code is 246
// the next conditional statement says that if code, which is now 246, is > 250 the value for 'secret' will change to 'duper'. 
// since code is less than 250 when the consol.log is ran the console will log 'super'.  

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// created 3 variables, isStudent is true, age is 34, and zip is 55407
// conditional statement that if isStudent is true and zip is >80000, if this is true and both conditions are met the console will log `You're a student on the West Coast!`
// it is not true, then it checks if isStudent is false, or if the persons age is under 30 and if so in either case it will log 'What are your hobbies?'
// it is not, then it will check if isStudent equalts true and if so log 'Welcome to Prime!' it is so this is what it will log
// finally, if all do not match, the default of 'How about the weather?' will log
// So, after these values and conditions the console will log "Welcome to Prime!" as this is the condition that is met first. 
// This is because the first two conditions are false and the third is true.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  //FIX - variable definition missing for colorTwo. fix: {colorOne = 'purple', colorTwo = 'purple'}
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

//FIX - Instructions say temp >39 AND if time >=4. They used the 'or' symbol. Should be if(temp > 39 && time >= 4)
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;
//FIX-Instructions as to check if age is >= to, and say the output should be 'enter' which is not in the right log for the current statement
// FIX cont. - Should read : if(age >= minAge){console.log('enter')'} else {console.log('no entry');}
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

