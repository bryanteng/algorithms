#difficulty: easy
#https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

# Given an integer number n, return the difference between the product of its digits and the sum of its digits.

def subtract_product_and_sum(n)
    n=n.to_s.chars.map(&:to_i)
    if n[0] == 0
      n[1] = n[1]*-1 
      n = n[1..-1]
    end
    n.reduce(:*) - n.sum
end