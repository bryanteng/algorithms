#difficulty: medium
#https://www.hackerrank.com/challenges/recursive-digit-sum/problem

# We define super digit of an integer x using the following rules:

# Given an integer, we need to find the super digit of the integer.

# If x has only 1 digit, then its super digit is x.
# Otherwise, the super digit of  is equal to the super digit of the sum of the digits of .
# For example, the super digit of 9875 will be calculated as:

# 	super_digit(9875)   	9+8+7+5 = 29 
# 	super_digit(29) 	2 + 9 = 11
# 	super_digit(11)		1 + 1 = 2
# 	super_digit(2)		= 2  
# You are given two numbers n and k. The number p is created by concatenating the string n*k times. Continuing the above example where n=9875, assume your value k=4. Your initial p=9875987598759875 (spaces added for clarity).

#     superDigit(p) = superDigit(9875987598759875)
#                   5+7+8+9+5+7+8+9+5+7+8+9+5+7+8+9 = 116
#     superDigit(p) = superDigit(116)
#                   1+1+6 = 8
#     superDigit(p) = superDigit(8)
# All of the digits of p sum to 116. The digits of 116 sum to 8. 8 is only one digit, so it's the super digit.


def sums(num)
    num = num.digits
    index = 0
    sum = num.length.even? ? 0 : num[num.length/2]
    while index < num.length/2
      sum+= (num[index] + num[num.length-index-1])
      index+=1
    end
    sum
  end
  
  def superDigit(n, k)
    num = sums(n.to_i)*k
    until num.digits.length == 1
      num = sums(num)
    end
  num
  end