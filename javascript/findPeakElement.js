// difficulty: medium
// https://leetcode.com/problems/find-peak-element/
//
// A peak element is an element that is strictly greater than its neighbors.
// Given an integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.
//
// You may imagine that nums[-1] = nums[n] = -∞.
// Example 1:
// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.

var findPeakElement = function(nums) {
    if(nums.length == 1) return 0
    let prev
    let next
    for(let i = 0; i < nums.length; i++){
      if(i == 0) prev = -Infinity
      else prev = nums[i-1]

      if(i == nums.length-1) next = -Infinity
      else next = nums[i+1]

      if(nums[i] > prev){
        if(nums[i] >  next){
          return i
        }
      }
    }
    return -1
};
