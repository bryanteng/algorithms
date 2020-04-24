// difficulty: hard
// https://leetcode.com/problems/nth-magical-number/
//
// A positive integer is magical if it is divisible by either A or B.
// Return the N-th magical number.  Since the answer may be very large, return it modulo 10^9 + 7.
// Example 1:
// Input: N = 1, A = 2, B = 3
// Output: 2
//
// Example 2:
// Input: N = 4, A = 2, B = 3
// Output: 6
//
// Example 3:
// Input: N = 5, A = 2, B = 4
// Output: 10
//
// Example 4:
// Input: N = 3, A = 6, B = 4
// Output: 8

var nthMagicalNumber = function(N, A, B) {
  if(N <= 0) return 0
  let smaller = A < B ? A : B
  let greater = A > B ? A : B
  if(N == 1) return smaller
  let lowest = smaller
  let greatest = greater * N
  let numSmaller
  let numGreater
  let shared
  let lcm = lowestCommonMultiple(A,B)
  const MOD = 1000000007;

  while(true){
    let middle = Math.floor(lowest + (greatest - lowest) / 2)
    numSmaller = Math.floor(middle / smaller)
    numGreater = Math.floor(middle / greater)

    shared = Math.floor(middle / lcm)

    if(numSmaller + numGreater - shared == N) break
    if(numSmaller + numGreater - shared < N){
      lowest = middle + 1
    }else{
      greatest = middle
    }

  }

    let ret = smaller * numSmaller > greater * numGreater ? smaller * numSmaller : greater * numGreater

    return ret%MOD
};

function lowestCommonMultiple(n1,n2){
  let lcm = n1 * n2
  let i = 2
  while(i <= Math.sqrt(lcm)){
    let t = lcm / i
    if(lcm % i == 0 && t % n1 == 0 && t % n2 == 0 ){
      lcm = t
      i=1
    }
    i+=1
  }
  return lcm
}
