# 6 kyu kata
# https://www.codewars.com/kata/create-a-frame
# Given an array of strings and a character to be used as border, output the frame with the content inside.

def frame(text, char)
  length = text.max{|x| x.length}.length + 4
  ret=[]
  ret.push(char*length)

  text.each{|x| ret.push("#{char} #{x}#{" "*(x.length+4-(length))} #{char}")}
  ret.push(char*length)
  ret.each{|x| puts x}
end

p frame(["small","frame","larger","frame"], "+")
