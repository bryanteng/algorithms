# 6 kyu kata
# https://www.codewars.com/kata/simple-fun-number-79-delete-a-digit/train/ruby
# Given an integer n, find the maximal number you can obtain by deleting exactly one digit of the given number.
#
# Example
# For n = 152, the output should be 52;
#
# For n = 1001, the output should be 101.

def delete_digit(n)
    index = 0
    string_num= n.to_s
    largest = 0
    while index < string_num.length
      temp = string_num[0 ... index] + string_num[index+1 .. -1]
      largest = temp.to_i if temp.to_i > largest
      index+=1
    end
    largest
end
