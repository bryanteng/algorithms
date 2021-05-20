// difficulty:easy
// https://leetcode.com/problems/longest-common-prefix/
//
// Write a function to find the longest common prefix string amongst an array of strings.
//
// If there is no common prefix, return an empty string "".
//
// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
//
// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function(strs) {
    let first = strs[0]
    if(first == "") return ""
    if(strs.length == 1) return first
    let sub
    for(let i = 0; i < first.length; i++){
        sub = first.substr(0,i+1)
        if(strs.every(x=> x.startsWith(sub))) continue;
        else return sub.substr(0,sub.length-1);
    }
    // console.log(sub)
    return sub
};
