// difficulty: medium
// https://leetcode.com/problems/container-with-most-water/
//
// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.
//
// Note: You may not slant the container and n is at least 2.

var maxArea = function(height) {
    let i = 0
    let i2 = height.length - 1
    let biggest = 0
    let temp = 0
    while(i < i2){
      let width = i2 - i
      let tall = Math.min(height[i], height[i2])
      temp = width * tall
      if(temp > biggest) biggest = temp
      if(height[i] < height[i2]){
        i += 1
      }else{
        i2 -= 1
      }
    }
  return biggest
};
