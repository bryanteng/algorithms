// difficulty: easy
// https://leetcode.com/problems/reverse-only-letters/
//
// Given a string S, return the "reversed" string where all characters that are not a letter stay in the same place, and all letters reverse their positions.
//
// Example 1:
//
// Input: "ab-cd"
// Output: "dc-ba"
// Example 2:
//
// Input: "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"

var reverseOnlyLetters = function(S) {
    S=S.split("")
    let index = 0
    let index2 = S.length-1
    while(index < index2){
      if(S[index].match(/^[a-z]+$/i)&& S[index2].match(/^[a-z]+$/i)){
        let temp = S[index2]
        S[index2] = S[index]
        S[index] = temp
        index+=1
        index2-=1
      }else if(!S[index].match(/^[a-z]+$/i)){
        index+=1
      }else{
        index2-=1
      }
    }
    return S.join("")
};
