// 4 kyu kata
// https://www.codewars.com/kata/sum-by-factors/javascript

// Given an array of positive or negative integers

// I= [i1,..,in]

// you have to produce a sorted array P of the form

// [ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...]

// P will be sorted by increasing order of the prime numbers. The final result has to be given as a string in Java, C#, C, C++ and as an array of arrays in other languages.

// Example:

// I = [12, 15]; //result = [[2, 12], [3, 27], [5, 15]]
// [2, 3, 5] is the list of all prime factors of the elements of I, hence the result.

// Notes:

// It can happen that a sum is 0 if some numbers are negative!
// Example: I = [15, 30, -45] 5 divides 15, 30 and (-45) so 5 appears in the result, the sum of the numbers for which 5 is a factor is 0 so we have [5, 0] in the result amongst others.

function getPrimes(n){
    let ret=[]
    for(let i = 2; i <= n; i++){
      if(n%i ==0 && isPrime(i)) ret.push(i)
    }
    return ret
  }
  
  function isPrime(num){
    if (num<2) return false
    for(let i = 2; i <= Math.sqrt(num); i++){
      if(num%i ==0) return false
    }    
    return true
  }
  
  function sumOfDivided(lst) {
    let primes = []
    lst = lst.map(x=> {
      let tmp = getPrimes(Math.abs(x))
      primes.push(tmp)
      return [x, tmp]}
    )
    return [... new Set([].concat.apply([], primes))].map(x=> {
      let sum =0
      for(let i=0; i<lst.length;i++){
        if(lst[i][1].includes(x)) sum+=lst[i][0]
      }
      return [x,sum]
    }).sort((a,b)=> a[0] - b[0])
  }