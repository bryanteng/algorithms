// difficulty: hard
// https://leetcode.com/problems/substring-with-concatenation-of-all-words/
//
// You are given a string s and an array of strings words of the same length. Return all starting indices of substring(s) in s that is a concatenation of each word in words exactly once, in any order, and without any intervening characters.
//
// You can return the answer in any order.
// Example 1:
// Input: s = "barfoothefoobarman", words = ["foo","bar"]
// Output: [0,9]
// Explanation: Substrings starting at index 0 and 9 are "barfoo" and "foobar" respectively.
// The output order does not matter, returning [9,0] is fine too.
// Example 2:
//
// Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
// Output: []
// Example 3:
//
// Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
// Output: [6,9,12]

var findSubstring = function(s, words) {
  let first = words[0]
  let len = first.length
  let total = words.length * len
  let ret = []

  let wordsHash = {}
  for(let i of words){
    if(wordsHash[i]) wordsHash[i]++
    else wordsHash[i] = 1
  }
  let tempHash = Object.assign({},wordsHash)
  let lenSplit = new RegExp('.{1,' + len + '}', 'g')

  for(let i = 0; i < s.length; i+=1){
    let check = s.slice(i,i+len)
    if(check.length < total.length) break
    if(wordsHash[check]){
      let test = s.slice(i,i+total)
      if(test.length < total) break
      test = test.match(lenSplit)
      for(j of test){
        if(tempHash[j]){
          tempHash[j]-=1
          if(tempHash[j] == 0) delete tempHash[j]
        }else break
      }
      if(Object.keys(tempHash).length == 0 ) ret.push(i)
      tempHash = Object.assign({},wordsHash)
    }
  }
  return ret
};
