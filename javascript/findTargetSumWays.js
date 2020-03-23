// difficulty: medium
// https://leetcode.com/problems/target-sum/
//
// You are given a list of non-negative integers, a1, a2, ..., an, and a target, S. Now you have 2 symbols + and -. For each integer, you should choose one from + and - as its new symbol.
// Find out how many ways to assign symbols to make sum of integers equal to target S.
// Example 1:
// Input: nums is [1, 1, 1, 1, 1], S is 3.
// Output: 5
// Explanation:
//
// -1+1+1+1+1 = 3
// +1-1+1+1+1 = 3
// +1+1-1+1+1 = 3
// +1+1+1-1+1 = 3
// +1+1+1+1-1 = 3
//
// There are 5 ways to assign symbols to make the sum of nums be target 3.
// Note:
// The length of the given array is positive and will not exceed 20.
// The sum of elements in the given array will not exceed 1000.
// Your output answer is guaranteed to be fitted in a 32-bit integer.

var findTargetSumWays = function(nums, S) {
    let dict_num={}
    dict_num[nums[0]]=1
    dict_num[-nums[0]]=1
    if(nums[0] == 0) dict_num[nums[0]]=2
    for(let num of nums.slice(1,nums.length)){
        let dict_temp={}
        for(let [k,v] of Object.entries(dict_num)){
            k= +k
            num = +num
            dict_temp[k+num] ? dict_temp[k+num]+=dict_num[k] :dict_temp[k+num]=dict_num[k]
            dict_temp[k-num] ? dict_temp[k-num]+=dict_num[k] :dict_temp[k-num]=dict_num[k]
        }
        dict_num=dict_temp
    }
    return dict_num[S] ? dict_num[S] : 0
};
