// difficulty: easy
// https://www.hackerrank.com/challenges/equality-in-a-array/problem
//
// Complete the equalizeArray function in the editor below. It must return an integer that denotes the minimum number of deletions required.
//
// equalizeArray has the following parameter(s):
//
// arr: an array of integers
//
// For example, if his array is arr = [1,2,3,3] , we see that he can delete the 2 elements 1 and 3 leaving  arr = [2,2]. He could also delete both twos and either the 1 or the 3, but that would take 3 deletions. The minimum number of deletions is 2.


function equalizeArray(arr) {
  let hash = {}
  for(let i = 0; i<arr.length; i++){
    hash[arr[i]] ? hash[arr[i]] += 1 : hash[arr[i]] = 1
  }
  return arr.length - Math.max(... Object.values(hash))
}
