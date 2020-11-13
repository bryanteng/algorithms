// difficulty: easy
// https://leetcode.com/problems/merge-sorted-array/
//
// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
//
// Note:
//
// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.
// Example:
//
// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3
//
// Output: [1,2,2,3,5,6]

var merge = function(nums1, m, nums2, n) {
let last = m+n-1
  while(last >= 0 && n > -1){
    let M = !isNaN(nums1[m-1]) ? nums1[m-1] : -Infinity
    let N = !isNaN(nums2[n-1]) ? nums2[n-1] : -Infinity
    if(M >= N){
      nums1[last] = M
      m--
    }else if(M <= N){
      nums1[last] = N
      n--
    }
    last--
  }
};
