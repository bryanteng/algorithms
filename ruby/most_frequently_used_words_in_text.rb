# 4 kyu kata
# https://www.codewars.com/kata/most-frequently-used-words-in-a-text/train/ruby
# Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.
#
# Assumptions:
# A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII. (No need to handle fancy punctuation.)
# Matches should be case-insensitive, and the words in the result should be lowercased.
# Ties may be broken arbitrarily.
# If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.
# Examples:
# top_3_words("In a village of La Mancha, the name of which I have no desire to call to
# mind, there lived not long since one of those gentlemen that keep a lance
# in the lance-rack, an old buckler, a lean hack, and a greyhound for
# coursing. An olla of rather more beef than mutton, a salad on most
# nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
# on Sundays, made away with three-quarters of his income.")
# # => ["a", "of", "on"]
#
# top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
# # => ["e", "ddd", "aa"]

def top_3_words(text)
puts text
  text = text.gsub(/[:,.!?\/]/, "").split(" ").map{|x| x.downcase}.select{|x| x!= "'"}
  ret = text.sort_by{|x| text.count(x)}.uniq
  if ret.length >=3
    return ret[-3..-1].reverse
  elsif ret.length > 0
    return ret.reverse
  else
    return []
  end

end