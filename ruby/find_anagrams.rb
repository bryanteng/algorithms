# 5 kyu kata
#
# https://www.codewars.com/kata/where-my-anagrams-at/train/ruby
#
# What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:
#
# 'abba' & 'baab' == true
#
# 'abba' & 'bbaa' == true
#
# 'abba' & 'abbba' == false
#
# 'abba' & 'abca' == false
# Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none.

def anagrams(word, words)
  word = word.chars.sort
  words.select{|x| x.chars.sort == word}
end
