# 6 kyu kata
# https://www.codewars.com/kata/stop-gninnips-my-sdrow/train/ruby
# Instructions
# Output
# Past Solutions
# Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

# def spinWords(string)
#   string = string.split(" ")
#   index = 0
#   words = ""
#   while index < string.length
#   if string[index].length >4
#     string[index]= string[index].reverse
#     end
#     words = string.join(" ")
#     index+=1
#     end
#     words
# end

def spinWords(string)
  string.split(" ").map{|word| word.length > 4 ? word.reverse : word}.join(" ")
end

p spinWords("Hey fellow warriors")
