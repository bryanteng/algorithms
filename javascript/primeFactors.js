// 5 kyu kata
// https://www.codewars.com/kata/54d512e62a5e54c96200019e

// Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

//  "(p1**n1)(p2**n2)...(pk**nk)"
// with the p(i) in increasing order and n(i) empty if n(i) is 1.

// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

function primeFactors(n){
    let factors = {}
    for( let i = 2; i < n; i++){
      if(n%i==0){
        factors[i] ? factors[i]+=1 : factors[i] = 1
        n = n/i
        i =  1
      }
    }
    if(isPrime(n)) factors[n] ? factors[n]+=1 : factors[n] = 1
    return Object.keys(factors).map(num => factors[num] == 1 ? `(${num})` : `(${num}**${factors[num]})`).join("")
  }
  
  function isPrime(num){
    if (num<2) return false
    for(let i = 2; i <= Math.sqrt(num); i++){
      if(num%i ==0) return false
    }    
    return true
  }