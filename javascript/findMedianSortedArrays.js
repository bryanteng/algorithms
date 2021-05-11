// difficulty: hard
// https://leetcode.com/problems/median-of-two-sorted-arrays/
//
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
//
// The overall run time complexity should be O(log (m+n)).
//
// Example 1:
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
//
// Example 2:
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

var findMedianSortedArrays = function(nums1, nums2) {
    l1 = nums1.length
    l2 = nums2.length

    while(l1 + l2 > 2){
      start = Math.min(~~nums1[0],~~nums2[0])
      if(nums1[0] == start || l2 == 0){
        nums1.shift(0)
        l1 -= 1
      }else{
       nums2.shift(0)
       l2-=1
      }
      end = Math.max(~~nums1[l1-1], ~~nums2[l2-1])
      if(nums1[l1-1] == end || l2 == 0){
        nums1.pop(l1-1)
        l1 -= 1
      }else{
       nums2.pop(l2-1)
       l2-=1
      }
    }
  let res = 0
  if(l1+l2 == 2){
    res = nums1.concat(nums2).reduce((x,y)=> x+y)/2
  }else{
    res = ~~nums1[0]+ ~~nums2[0]
  }
  return res
};
