# 5 kyu kata
# https://www.codewars.com/kata/compute-the-largest-sum-of-all-contiguous-subsequences/train/ruby 

# Given an array of numbers, calculate the largest sum of all possible blocks of consecutive elements within the array. The numbers will be a mix of positive and negative values. If all numbers of the sequence are nonnegative, the answer will be the sum of the entire array. If all numbers in the array are negative, your algorithm should return zero. Similarly, an empty array should result in a zero return from your algorithm.

# largestSum([-1,-2,-3]) == 0
# largestSum([]) == 0
# largestSum([1,2,3]) == 6
# Easy, right? This becomes a lot more interesting with a mix of positive and negative numbers:

# largestSum([31,-41,59,26,-53,58,97,-93,-23,84]) == 187

def largest_sum(arr)
    largest = arr.sum
    index = 0
    while index < arr.length-1
      index2= index+1
      while index2<arr.length 
        temp = (arr[index .. index2]).sum
        largest = temp if temp > largest 
        index2+=1
      end
      index+=1
    end
    largest < 1 ? 0 : largest
  end