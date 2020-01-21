#difficulty: easy
#https://leetcode.com/problems/valid-perfect-square/

# Given a positive integer num, write a function which returns True if num is a perfect square else False.

# Note: Do not use any built-in library function such as sqrt.

def is_perfect_square(num)
    i=0
    while true
      p = i*i
      return true if p == num
      return false if p > num
      i+=1
    end
end