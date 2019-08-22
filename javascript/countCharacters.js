// difficulty: easy
// https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/
//
// You are given an array of strings words and a string chars.
//
// A string is good if it can be formed by characters from chars (each character can only be used once).
//
// Return the sum of lengths of all good strings in words.
//
// Example 1:
// Input: words = ["cat","bt","hat","tree"], chars = "atach"
// Output: 6
// Explanation:
// The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.

var countCharacters = function(words, chars) {
    return words.filter(word=>{
      let temp = chars.split("")
      let bool = true
      word.split("").forEach(char=>{
        if(!bool) return false
        if(temp.includes(char)){
          temp.splice(temp.indexOf(char),1)
        }else{
           bool = false
        }
      })
      return bool
    }).join("").length
};
