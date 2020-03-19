// difficulty: medium
// https://leetcode.com/problems/spiral-matrix/
//
// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.
// Example 1:
// Input:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// Output: [1,2,3,6,9,8,7,4,5]
//
// Example 2:
// Input:
// [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9,10,11,12]
// ]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

var spiralOrder = function(array) {
  const directs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  const N = array.length;
  if(array.length == 0) return []
  const M = array[0].length
  const END = N*M
  let d = 0
  let x = 0
  let y = 0
  var i = 0
  if (!array[x][y]) return []
  let ret = [array[x][y]]
  array[x][y] = true
  while (ret.length < END) {
    let [moveX, moveY] = directs[d]
    x += moveX
    y += moveY
    while (x >= 0 && x < N && y >= 0 && y < M && typeof array[x][y] != "boolean") {
      ret.push(array[x][y])
      array[x][y] = true
      x += moveX
      y += moveY
      i+=1
    }
    x -= moveX
    y -= moveY
    d += 1
    if (d == 4) d = 0
  }
  return ret
}
