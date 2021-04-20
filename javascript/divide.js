// difficulty: medium
// https://leetcode.com/problems/divide-two-integers/
//
// Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.
// Return the quotient after dividing dividend by divisor.
// The integer division should truncate toward zero, which means losing its fractional part. For example, truncate(8.345) = 8 and truncate(-2.7335) = -2.
// Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, assume that your function returns 231 − 1 when the division result overflows.
//
// Example 1:
// Input: dividend = 10, divisor = 3
// Output: 3
// Explanation: 10/3 = truncate(3.33333..) = 3.
//
// Example 2:
// Input: dividend = 7, divisor = -3
// Output: -2
// Explanation: 7/-3 = truncate(-2.33333..) = -2.
//
// Example 3:
// Input: dividend = 0, divisor = 1
// Output: 0
//
// Example 4:
// Input: dividend = 1, divisor = 1
// Output: 1

var divide = function(dividend, divisor) {
  let neg = 0
  neg -= dividend < 0
  neg -= divisor < 0
  if(neg == -2 || neg == 0) {
    neg = false
  }else neg = true

  dividend = Math.abs(dividend)
  divisor = Math.abs(divisor)
  if(divisor > dividend) return 0

  if(dividend == 2147483648){
    if(divisor == 1){
        if(neg) return -2147483648
        else return 2147483647
    }
  }

  let num = `${dividend}`.split("")
  let i = 0
  let cNum = num[0]
  let ret = []
  let temp = 0
  let count = 0

  while( i < num.length ){
    cNum = parseInt(cNum)
    temp = 0
    count = 0
    if(cNum >= divisor){
      while(cNum >= divisor+temp ){
        temp+=divisor
        count++
      }
    }
    ret.unshift(count)
    cNum -=temp
    i++
    cNum += num[i]
  }
  if(neg) ret.push("-")
  return parseInt(ret.reverse().join``)
};
