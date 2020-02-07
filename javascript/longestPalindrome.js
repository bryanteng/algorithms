// difficulty: medium
// https://leetcode.com/problems/longest-palindromic-substring/

// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.

var longestPalindrome = function(s) {
    let C = 0 
    let R = -1
    let radius = 0
    let max_sz = 0
    let idx = 0
    let T = "#" + [...s].join("#") + "#"
    let N = T.length
    let P = [... "0".repeat(N)].map(x=> +x)
    for(let i = 1; i < N ; i++){
      if(i <= R){
        radius = Math.min(P[2*C - i], R-i)
      }else{
        radius = 0 
      }
      while(i+radius < N && i-radius >= 0 && T[i+radius] == T[i-radius]){
        radius = radius + 1
      }
      P[i] = radius - 1
      if(P[i] > max_sz){
        max_sz = P[i]
        idx = i
      }
      if(i+radius - 1 > R ){
        C = i
        R = i + radius - 1
      }
    }
    let ret = T.slice(idx - max_sz, idx + max_sz + 1)
    return ret.split("#").join``
};