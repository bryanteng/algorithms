// difficulty: hard
// https://leetcode.com/problems/first-missing-positive/
//
// Given an unsorted integer array, find the smallest missing positive integer.
// Example 1:
// Input: [1,2,0]
// Output: 3
//
// Example 2:
// Input: [3,4,-1,1]
// Output: 2
//
// Example 3:
// Input: [7,8,9,11,12]
// Output: 1

var firstMissingPositive = function(nums) {
    let lowest = 1
    let numsHash = {}
    for(let i = 0; i < nums.length; i++){
      if(nums[i] > 0){
        numsHash[nums[i]] = true
      }
    }
    for(let i in Object.keys(numsHash)){
      if(lowest in numsHash){
        lowest += 1
      }else return lowest

    }
    return lowest
};
