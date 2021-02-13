// difficulty: easy
// https://leetcode.com/problems/sum-of-unique-elements/
// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.
//
// Return the sum of all the unique elements of nums.
//
//
//
// Example 1:
//
// Input: nums = [1,2,3,2]
// Output: 4
// Explanation: The unique elements are [1,3], and the sum is 4.

var sumOfUnique = function(nums) {
    let hash = {}
    let total = 0
    for(let i of nums){
      if(hash[i]){
        hash[i]++
        if(hash[i] == 2) total -= i
      }else{
        hash[i] = 1
        total += i
      }
    }
    return total
};
