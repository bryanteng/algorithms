# 5 kyu kata
# https://www.codewars.com/kata/sum-of-pairs/train/ruby
# Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

def sum_pairs(ints, s)
    int_hash = {}
    index = 0
    while index < ints.length
      if int_hash[ints[index]]
        return [s- ints[index], ints[index]]
      else
        int_hash[s-ints[index]] = 1
      end
      index+=1
    end
  nil
end
