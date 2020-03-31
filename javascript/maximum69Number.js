// difficulty: easy
// https://leetcode.com/problems/maximum-69-number
//
// Given a positive integer num consisting only of digits 6 and 9.
// Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

var maximum69Number  = function(num) {
    let s =`${num}`
    let i = s.indexOf('6')
    if( i == -1){
        return num
    }else return +(s.slice(0,i) + '9' + s.slice(i+1,s.length))
};
