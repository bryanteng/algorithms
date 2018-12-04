// 6 kyu kata
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
//
// If anything in the text isn't a letter, ignore it and don't return it.
//
// "a" = 1, "b" = 2, etc.


function alphabetPosition(text) {
  let newArray = []
  text.split("").map(letter => {
    let num = letter.toLowerCase().charCodeAt(0)
    if (num >=97 && num <= 122){
     newArray.push(num-96)
    }
  })
 return newArray.join(" ")
}


console.log(alphabetPosition("The sunset sets at twelve o' clock.") === "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11")
