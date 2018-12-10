// 6 kyu kata
// https://www.codewars.com/kata/string-transformer/train/javascript
// Given a string, return a new string that has transformed based on the input:
//
// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// For example:
// stringTransformer('Example Input')/string_transformer("Example Input") (depending on the language you are completing the Kata in) should return 'iNPUT eXAMPLE'
//
// You may assume the input only contain English alphabet and spaces.

// function stringTransformer(str) {
//   return str.split(" ").map( str =>{
// 	return str.split("").map(letter=> letter == letter.toLocaleUpperCase() ? letter.toLocaleLowerCase() : letter.toLocaleUpperCase()).join("")
// 	}).reverse().join(" ")
// }

function stringTransformer(str) {
  return str.split(" ").map( str => wordCaseSwap(str)).reverse().join(" ")
}

function wordCaseSwap(word){
  return word.split("").map(letter=> swapCase(letter) ).join("")
}

function swapCase(letter){
  return letter == letter.toLocaleUpperCase() ? letter.toLocaleLowerCase() : letter.toLocaleUpperCase()
}

console.log(stringTransformer('Example string') === 'STRING eXAMPLE');
