# 6 kyu kata
# https://www.codewars.com/kata/sum-consecutives/train/ruby/5b795f9acd7cb7fd050000ca
# You are given a list/array which contains only integers (positive and negative). Your job is to sum only the numbers that are the same and consecutive. The result should be one list.
#
# Extra credit if you solve it in one line. You can asume there is never an empty list/array and there will always be an integer.
#
# Same meaning: 1 == 1
#
# 1 != -1


def sum_consecutives(s)
array = [s[0]]
index = 1
while index < s.length
  if s[index] == s[index-1]
    array[-1] += s[index]
    index+=1
    next
  end
  array << s[index]
  index+=1
end
array
end
