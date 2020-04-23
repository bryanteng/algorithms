// difficulty: easy
// https://leetcode.com/problems/range-sum-query-immutable/
//
// Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.
//
// Example:
// Given nums = [-2, 0, 3, -5, 2, -1]
//
// sumRange(0, 2) -> 1
// sumRange(2, 5) -> -1
// sumRange(0, 5) -> -3
// Note:
// You may assume that the array does not change.
// There are many calls to sumRange function.

var NumArray = function(nums) {
    var cache = {0:0}
    let sum = 0
    for(let i = 0; i < nums.length+1; i++){
        sum += nums[i]
        cache[i+1] = sum
    }
    NumArray.prototype.sumRange = function(i, j) {
        return cache[j+1]-cache[i]
    };

};
