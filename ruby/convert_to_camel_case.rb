# 6 kyu kata
# https://www.codewars.com/kata/517abf86da9663f1d2000003
# Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

# def to_camel_case(str)
# if str == ""
# return str
# end
#
#   index = 0
#   while index < str.length
#   if str[index] == "-"
#     str = str.split("-")
#     end
#   if str[index] == "_"
#     str=str.split("_")
#     end
#     index +=1
#   end
# newString =str[0]
# index2=1
# while index2 < str.length
# str[index2] = str[index2].capitalize
# newString += str[index2]
# index2+=1
# end
#
# newString
#
# end

def to_camel_case(str)
  temp = str.split(/[-_]/)
  ret =[]
  temp.each_with_index do |word,index|
    index != 0 ? ret.push(word.capitalize) : ret.push(word)
  end
  ret ? ret.join("") : str
end

p to_camel_case("this-is_a-test_string")
