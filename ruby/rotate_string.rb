# difficulty: easy
# https://leetcode.com/problems/rotate-string/
#
# We are given two strings, A and B.
#
# A shift on A consists of taking string A and moving the leftmost character to the rightmost position. For example, if A = 'abcde', then it will be 'bcdea' after one shift on A. Return True if and only if A can become B after some number of shifts on A.
#
# Example 1:
# Input: A = 'abcde', B = 'cdeab'
# Output: true
#
# Example 2:
# Input: A = 'abcde', B = 'abced'
# Output: false

def rotate_string(a, b)
    return true if a.empty? && b.empty?
    a.chars.each.with_index do |x,index|
       return true if a[index+1 .. a.length]+a[0 .. index] == b
    end
  return false
end
