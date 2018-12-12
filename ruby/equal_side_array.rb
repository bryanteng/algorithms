# 6 kyu kata
# https://www.codewars.com/kata/equal-sides-of-an-array/train/javascript
# You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

def find_even_index(nums)
check = 0
while check < nums.length
  check == 0 ? left_sum = 0 : left_sum = nums[(0)..(check-1)].sum
  check == nums.length-1 ? right_sum =0 : right_sum = nums[(check+1)..-1].sum
  return check if left_sum == right_sum
  check +=1
end
return -1
end
