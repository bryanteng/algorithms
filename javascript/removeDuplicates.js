// difficulty: easy
// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
//
// Given a string S of lowercase letters, a duplicate removal consists of choosing two adjacent and equal letters, and removing them.
// We repeatedly make duplicate removals on S until we no longer can.
// Return the final string after all such duplicate removals have been made.  It is guaranteed the answer is unique.
//
// Example
// Input: "abbaca"
// Output: "ca"
// Explanation:
// For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".

var removeDuplicates = function(S) {
  let index = 0
  while (index < S.length){
    if(S[index] == S[index+1]){
      return removeDuplicates(S.substr(0,index)+S.substr(index+2,S.length))
    }
    index+=1
  }
  return S
};
