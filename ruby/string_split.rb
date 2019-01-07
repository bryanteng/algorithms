# 6 kyu kata
# https://www.codewars.com/kata/split-strings/train/ruby
#
# Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
#
# Examples:
#
# solution('abc') # should return ['ab', 'c_']
# solution('abcdef') # should return ['ab', 'cd', 'ef']

def solution(str)
  str+="_" if str.length.odd?
  res = []
  index = 0
  while index < str.length
    res << str[index .. index+1]
    index+=2
  end
  res
end
