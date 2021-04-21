// difficulty: medium
// https://leetcode.com/problems/non-decreasing-array/
//
// Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most one element.
//
// We define an array is non-decreasing if nums[i] <= nums[i + 1] holds for every i (0-based) such that (0 <= i <= n - 2).
//
// Example 1:
// Input: nums = [4,2,3]
// Output: true
// Explanation: You could modify the first 4 to 1 to get a non-decreasing array.
//
// Example 2:
// Input: nums = [4,2,1]
// Output: false
// Explanation: You can't get a non-decreasing array by modify at most one element.

var checkPossibility = function(nums) {
  let i = 1
  let count = 0
  while( i < nums.length ){
    if( nums[i-1] > nums[i] ){
      if(count == 1) return false
      if(nums[i-2] > nums[i]) nums[i] = nums[i-1]
      else nums[i-1] = nums[i]
      count++
    }
    i++
  }
  return true
};
