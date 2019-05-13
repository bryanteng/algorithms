// 5 kyu kata
// https://www.codewars.com/kata/55aa075506463dac6600010d

// Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42. These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764. The sum of the squared divisors is 2500 which is 50 * 50, a square!

// Given two integers m, n (1 <= m <= n) we want to find all integers between m and n whose sum of squared divisors is itself a square. 42 is such a number.

// The result will be an array of arrays or of tuples (in C an array of Pair) or a string, each subarray having two elements, first the number whose squared divisors is a square and then the sum of the squared divisors.

// #Examples:

// list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
// list_squared(42, 250) --> [[42, 2500], [246, 84100]]

function listSquared(m, n) {
    let array = []
    for(let i = m; i <= n; i++) array.push(i)
    return array.map(num => [num,toDivisors(num)]).filter(x=> Math.sqrt(x[1]) %1 == 0)
  }
  
  function toDivisors(n){
    let ret=[n**2]
    for(let i = 1; i<= n/2; i++){ if(n%i ==0) ret.push((i**2))}
    return ret.reduce((a,b) => a + b)
  }