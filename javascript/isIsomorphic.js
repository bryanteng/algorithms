// difficulty: easy
// https://leetcode.com/problems/isomorphic-strings
//
// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
//
// Example 1:
// Input: s = "egg", t = "add"
// Output: true
//
// Example 2:
// Input: s = "foo", t = "bar"
// Output: false

var isIsomorphic = function(s, t) {
    if(t.length != s.length ) return false
    let translated = {}
    for(let i = 0; i< s.length; i++){
        if(translated[s[i]] === undefined){
            translated[s[i]] = t[i]
        }else{
            if(translated[s[i]] != t[i]) return false
        }
    }
    let bTranslated = {}
    for(let i = 0; i< s.length; i++){
        if(bTranslated[t[i]] === undefined){
            bTranslated[t[i]] = s[i]
        }else{
            if(bTranslated[t[i]] != s[i]) return false
        }
    }
    return true
};
