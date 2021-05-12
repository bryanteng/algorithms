// difficulty: easy
// https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts
//
// Given an integer n, return a string with n characters such that each character in such string occurs an odd number of times.
//
// The returned string must contain only lowercase English letters. If there are multiples valid strings, return any of them.
//
// Example 1:
// Input: n = 4
// Output: "pppz"
// Explanation: "pppz" is a valid string since the character 'p' occurs three times and the character 'z' occurs once. Note that there are many other valid strings such as "ohhh" and "love".

var generateTheString = function(n) {
  if(n==0) return ""
  let ret = ""
  if(n%2 == 0){
      ret += "z"
      ret += "p".repeat(n-1)
  }else{
      ret = "p".repeat(n)
  }
  return ret
};
