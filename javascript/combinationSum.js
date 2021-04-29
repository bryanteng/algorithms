// difficulty: medium
// https://leetcode.com/problems/combination-sum/
//
// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.
//
// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.
//
// It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.
//
// Example 1:
// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
//
// Example 2:
// Input: candidates = [2,3,5], target = 8
// Output: [[2,2,2,2],[2,3,3],[3,5]]

var combinationSum = function(candidates, target) {
    let ret = []
    function recursive(nums, candidates, value){
        if(value == target) ret.push(nums)
        else{
            for(let i = 0; i < candidates.length; i++){
                if(value + candidates[i] <= target){
                    recursive(nums.concat(candidates[i]), candidates.slice(i), value+candidates[i])
                }
            }
        }
    }
    recursive([],candidates,0)
    return ret
};
