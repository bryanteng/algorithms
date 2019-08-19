# difficulty: easy
# https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
#
# Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.
#
# The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.
#
# Note:
#
# Your returned answers (both index1 and index2) are not zero-based.
# You may assume that each input would have exactly one solution and you may not use the same element twice.

def two_sum(numbers, target)
    hash={}
    numbers.each_with_index do |num,index|
      if(hash[num])
        return [hash[num], index+1]
      else
        hash[target-num] = index+1
      end
    end
end
