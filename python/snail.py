# 4 kyu kata
# https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript
#
# Snail Sort
# Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
# array = [[1,2,3],
#          [4,5,6],
#          [7,8,9]]
# snail(array) #=> [1,2,3,6,9,8,7,4,5]
# For better understanding, please follow the numbers of the next array consecutively:
#
# array = [[1,2,3],
#          [8,9,4],
#          [7,6,5]]
# snail(array) #=> [1,2,3,4,5,6,7,8,9]

def snail(array):
  directs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  N = len(array);
  END = N*N
  d = 0
  x = 0
  y = 0
  if len(array[x]) == 0 :
    return []
  ret = [array[x][y]]
  array[x][y] = 'x'
  while len(ret) < END :
    moveX, moveY = directs[d]
    x += moveX
    y += moveY
    while x >= 0 and x < N and y >= 0 and y < N and array[x][y] != 'x':
      ret.append(array[x][y])
      array[x][y] = 'x'
      x += moveX
      y += moveY
    x -= moveX
    y -= moveY
    d += 1
    if d == 4:
      d = 0
  return ret
