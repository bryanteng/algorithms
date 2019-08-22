# difficulty: easy
# https://leetcode.com/problems/first-unique-character-in-a-string/
#
# Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.
#
# Examples:
#
# s = "leetcode"
# return 0.
#
# s = "loveleetcode",
# return 2.

def first_uniq_char(s)
 s.chars.uniq.each do |x|
     return s.index(x) if s.count(x) == 1
 end
 -1
end
