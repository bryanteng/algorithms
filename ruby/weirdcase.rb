# 6 kyu kata
#
# https://www.codewars.com/kata/weird-string-case/train/ruby
#
# Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.
#
# The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

def weirdcase string
  string.split(" ").map{|word| toWeirdCase(word)}.join(" ")
end

def toWeirdCase word
  word.split("").map.with_index{|letter,index| index % 2 == 0 ? letter.upcase : letter.downcase }.join()
end
