// difficulty: easy
// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

// Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

// Find all the elements of [1, n] inclusive that do not appear in this array.

// Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

// Example:

// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [5,6]

var findDisappearedNumbers = function(nums) {
    nums.push(nums.length+1)
    let numSet = [... new Set([...nums.sort((a,b)=> a-b)])]
    let missing = []
    counter = 1
    for(let i = 0; i<numSet.length; i++){
        while(counter != numSet[i]){
          missing.push(counter)
          counter+=1
        }
      counter+=1
    }
    return missing    
};