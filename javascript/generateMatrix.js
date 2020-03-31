// difficulty: medium
// https://leetcode.com/problems/spiral-matrix-ii/
// Given a positive integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.
//
// Example:
//
// Input: 3
// Output:
// [
//  [ 1, 2, 3 ],
//  [ 8, 9, 4 ],
//  [ 7, 6, 5 ]
// ]

var generateMatrix = function(n) {
  let yArr = "0".repeat(n).split('')
  let arr = Array.from({length:n}).map(x=>yArr.slice())
  let array = arr.slice()
  const directs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  if(n == 0) return []
  const END = n*n
  let d = 0
  let x = 0
  let y = 0
  let count = 2
  array[x][y] = 1
  while (count <= END) {
    let [moveX, moveY] = directs[d]
    x += moveX
    y += moveY
    while (x >= 0 && x < n && y >= 0 && y < n && array[x][y] == "0") {
      array[x][y] = count
      count+=1
      x += moveX
      y += moveY
    }
    x -= moveX
    y -= moveY
    d += 1
    if (d == 4) d = 0
  }
  return array
};
