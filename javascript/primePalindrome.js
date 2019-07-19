// difficulty: medium
// https://leetcode.com/problems/prime-palindrome/

// Find the smallest prime palindrome greater than or equal to N.

// Recall that a number is prime if it's only divisors are 1 and itself, and it is greater than 1. 

// For example, 2,3,5,7,11 and 13 are primes.

// Recall that a number is a palindrome if it reads the same from left to right as it does from right to left. 

// For example, 12321 is a palindrome.

var primePalindrome = function(n) {
    if(n <= 11){
        for(n;true;n++){
        let num = `${n}`
        if(num[0] == num[num.length-1]){
          if(num == [...num].reverse().join("") && isPrime(n)){
            return n
          }
        }
      }
    }
    while(true){
      let num = nextPalindrome(n)
      n= +num
        let temp = n%10
        if(temp!=0 && temp%2!=0 && temp!=5 && (temp==1 || temp==3 || temp==7 || temp==9)){
          if(isPrime(n)){
            return num
          }
        }
    }
    return null
  };
  
  function isPrime(num){
    if(num < 2)return false
    for(let i = 2; i <= Math.sqrt(num); i++){
      if(num%i == 0)return false
    } 
    return true
  }
  
  function nextPalindrome(num){
    let str = `${num}`
    if(str.length % 2 ==0 ) return str ="1"+"0".repeat(str.length-1)+"1"
    let half = `${+str.substr(0,str.length/2+1)+1}`
    let front = half.substr(0,half.length-1)
    return half+[...front].reverse().join("")
  }