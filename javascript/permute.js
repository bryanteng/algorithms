// difficulty: medium
// https://leetcode.com/problems/permutations/
//
// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
//
// Example 1:
//
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Example 2:
//
// Input: nums = [0,1]
// Output: [[0,1],[1,0]]
// Example 3:
//
// Input: nums = [1]
// Output: [[1]]

var permute = function(nums) {
    let ret = []

    function helper(curr, arr){
        if(curr.length === nums.length) ret.push(curr)
        else{
            for(let i = 0; i < arr.length; i++){
                const currEle = arr[(i+arr.length)%arr.length]

                helper([... curr, currEle], arr.filter(ele => ele !== currEle) )
            }
        }
    }
    helper([], nums)
    return ret
};
