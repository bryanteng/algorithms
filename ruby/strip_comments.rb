# 4 kyu kata
# https://www.codewars.com/kata/strip-comments/train/ruby
#
# Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.
#
# Example:
#
# Given an input string of:
#
# apples, pears # and bananas
# grapes
# bananas !apples
# The output expected would be:
#
# apples, pears
# grapes
# bananas

def solution(input,markers)
res = []
  input.split("\n").map do |input|
    index = 0
    temp =""
    while index < input.length
      !markers.include?(input[index]) ? temp+=input[index] : break
      index+=1
    end
    res << temp.strip
  end
res.join("\n")
end
