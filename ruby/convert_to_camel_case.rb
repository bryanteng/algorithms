def to_camel_case(str)
if str == ""
return str
end

  index = 0
  while index < str.length
  if str[index] == "-"
    str = str.split("-")
    end
  if str[index] == "_"
    str=str.split("_")
    end
    index +=1
  end
newString =str[0]
index2=1
while index2 < str.length
str[index2] = str[index2].capitalize
newString += str[index2]
index2+=1
end

newString

end

p to_camel_case("this is a test string")
