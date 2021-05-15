// difficulty: easy
// https://leetcode.com/problems/length-of-last-word
//
// Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.
//
// A word is a maximal substring consisting of non-space characters only.
//
// Example 1:
// Input: s = "Hello World"
// Output: 5

var lengthOfLastWord = function(s) {
  let len = 0
  s = s.trim()
  for(let i = s.length-1; i >= 0; i--){
      if(s[i]!=" ") len++
      else break;
  }
    return len
};
