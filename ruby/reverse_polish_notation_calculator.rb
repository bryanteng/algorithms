# 6 kyu kata
# https://www.codewars.com/kata/52f78966747862fc9a0009ae

# Your job is to create a calculator which evaluates expressions in Reverse Polish notation.

# For example expression 5 1 2 + 4 * + 3 - (which is equivalent to 5 + ((1 + 2) * 4) - 3 in normal notation) should evaluate to 14.

# For your convenience, the input is formatted such that a space is provided between every token.

# Empty expression should evaluate to 0.

# Valid operations are +, -, *, /.

# You may assume that there won't be exceptional situations (like stack underflow or division by zero).

def calc(expr)
    array = expr.split(" ")
    operators = ["+","-","*","/"]
    index = 0
    while index < array.length
      if operators.include?(array[index])
       array[index-2] = eval("#{array[index-2]} #{array[index]} #{array[ index-1]}").to_s
       array.slice!(index-1.. index)
       index-=2
       next
      end
      index+=1
    end
    array[0].to_f 
end