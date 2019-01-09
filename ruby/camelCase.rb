# 6 kyu kata
# https://www.codewars.com/kata/camelcase-method/train/ruby
#
# Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

class String
  def camelcase
    self.split(" ").map{|word| word.capitalize}.join
  end
end
