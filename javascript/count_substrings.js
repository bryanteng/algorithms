// difficulty: medium
// https://leetcode.com/problems/palindromic-substrings/
//
// Given a string, your task is to count how many palindromic substrings in this string.
//
// The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.
//
// Example 1:
//
// Input: "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".
//
// Example 2:
//
// Input: "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

var countSubstrings = function(s) {
  let res = 0;
  let n = s.length
  for(let center = 0; center < n; center++){
      for(let i = 0; i <= 1; i++){
          let left = center
          let right = center+i;
          while(left>=0 && right<n && s[left]==s[right]){
              left-=1;
              right+=1;
              res+=1;
          }
      }
  }
  return res;
};
