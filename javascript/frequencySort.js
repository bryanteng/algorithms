// difficulty: medium
// https://leetcode.com/problems/sort-characters-by-frequency/

// Given a string, sort it in decreasing order based on the frequency of characters.
// Example 1:
// Input:
// "tree"
// Output:
// "eert"
// Explanation:
// 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

var frequencySort = function(s) {
    let hash={}
    for(char in s) hash[s[char]] ? hash[s[char]]+=1 : hash[s[char]]=1
    return Object.entries(hash).sort((a,b)=> b[1]-a[1]).map(char=> char[0].repeat(char[1])).join("")
  };