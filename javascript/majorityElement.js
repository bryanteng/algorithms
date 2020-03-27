// difficulty: easy
// https://leetcode.com/problems/majority-element/
//
// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
// You may assume that the array is non-empty and the majority element always exist in the array.
// Example 1:
// Input: [3,2,3]
// Output: 3
//
// Example 2:
// Input: [2,2,1,1,1,2,2]
// Output: 2

var majorityElement = function(nums) {
    let maj = nums.length/2
    let numHash = {}
    if(nums.length == 1) return nums[0]
    for(let i = 0; i < nums.length; i++){
      if(numHash[nums[i]]){
        numHash[nums[i]] +=1
        if(numHash[nums[i]] > maj) return nums[i]
      }else{
        numHash[nums[i]] = 1
      }
    }
    return false
};
