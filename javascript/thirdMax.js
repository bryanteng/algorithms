// difficulty: easy
// https://leetcode.com/problems/third-maximum-number/

// Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

var thirdMax = function(nums) {
    let set = new Set([...nums.sort((a,b)=>b-a)])
    let ret = [...set]
    return ret.length>=3 ? ret[2] : ret[0]
};