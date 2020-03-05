// difficulty: easy
// https://leetcode.com/problems/valid-parentheses/submissions/

// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.
// Example 1:
// Input: "()"
// Output: true
// Example 2:
// Input: "()[]{}"
// Output: true
// Example 3:
// Input: "(]"
// Output: false

var isValidParentheses = function(s) {
    let i = 0
    let closers={")":"(", "}":"{", "]":"["}
    while(i < s.length){
      if(closers[s[i]]){
        let i2 = i+1
        while(closers[s[i2]]) i2+=1
        let temp = [...s.slice(i,i2)].map(x=>closers[x]).reverse().join``
        let temp2 = s.slice(i-temp.length,i)
        if(temp == temp2){
          s = s.slice(0,i-temp.length)+s.slice(i2,s.length)
          i = i-temp.length
        }else return false
      }
      i+=1
    }
    return s.length == 0
};