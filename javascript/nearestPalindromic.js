// difficulty: hard
// https://leetcode.com/problems/find-the-closest-palindrome/
//
// Given an integer n, find the closest integer (not including itself), which is a palindrome.
//
// The 'closest' is defined as absolute difference minimized between two integers.
// Example 1:
// Input: "123"
// Output: "121"
// Note:
// The input n is a positive integer represented by string, whose length will not exceed 18.
// If there is a tie, return the smaller one as answer.

function makePalindrome(num, len, isEven){
  let half = num.substr(0,len)
  let front = isEven ? half : half.substr(0,half.length-1)
  return half+[...front].reverse().join("")
}

function prevPalindrome(num, len, isEven){
  if( num <= 0 ) return "Infinity"
  if(num <= 20){
    if(num == 11){
      return "9"
    }else if(num <= 10){
      return `${num - 1}`
    }
    else return "11"
  }
  let temp = num.substr(0,len)
  let half = `${temp-1}`
  if(half.length < temp.length){
    return "9".repeat(num.length-1)
  }
  let front = isEven ? half : half.substr(0,half.length-1)

  return half+[...front].reverse().join("")
}

function nextPalindrome(num, len, isEven){
  if(num >= 0){
    if(num == 9){
      return "11"
    }else if(num < 9){
      return `${num + 1}`
    }
  }else return "-Infinity"
  let temp = num.substr(0,len)
  let bool = false
  let half = `${+temp+1}`
  if(half.length > temp.length) bool = true

  let front = isEven ? half.substr(0,half.length-bool) : half.substr(0,half.length-1-bool)

  return half+[...front].reverse().join("")
}

var nearestPalindromic = function(n) {
  let len = Math.ceil( n.length / 2 )
  let isEven = n.length % 2 == 0
  let poss = [prevPalindrome(n, len, isEven),nextPalindrome(n, len, isEven)]
  temp = makePalindrome(n, len, isEven)
  if(temp != n) poss.push(temp)
  poss.sort((a,b) => a - b)
  diff = poss.map(x=> Math.abs(x-n))
  return `${poss[diff.indexOf(Math.min(...diff))]}`
};
