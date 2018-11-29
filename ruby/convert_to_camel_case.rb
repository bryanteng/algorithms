# Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

def to_camel_case(str)
  temp = str.split(/[-_]/)
  ret =[]
  temp.each_with_index do |word,index|
    index != 0 ? ret.push(word.capitalize) : ret.push(word)
  end
  ret ? ret.join("") : str
end

p to_camel_case("this-is_a-test_string")
