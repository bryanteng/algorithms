# difficulty: easy
# https://leetcode.com/problems/find-numbers-with-even-number-of-digits/

# Given an array nums of integers, return how many of them contain an even number of digits.

def find_numbers(nums)
    return nums.select{ |x| x.digits.length.even? }.length
end
