// 6 kyu kata
// https://www.codewars.com/kata/your-order-please/train/ruby
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

function order(words){
  ret=[]
  words = words.split(" ")
  for( let i = 1; i < words.length + 1; i++){
    ret.push(words.filter(word => word.includes(`${i}`)))
  }
  return ret.join(" ")
}
