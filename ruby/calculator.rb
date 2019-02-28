# 3 kyu kata
# https://www.codewars.com/kata/5235c913397cbf2508000048

# Create a simple calculator that given a string of operators (+ - * and /) and numbers separated by spaces returns the value of that expression

# Example:

# Calculator().evaluate("2 / 2 + 3 * 4 - 6") # => 7
# Remember about the order of operations! Multiplications and divisions have a higher priority and should be performed left-to-right. Additions and subtractions have a lower priority and should also be performed left-to-right.

class Calculator
    def evaluate(string) 
      index = 0
      string = string.split(" ")
      while index < string.length
        if string[index] == "*" || string[index] == "/"
          string[index-1] = string[index] == "*" ? (string[index-1].to_f * string[index+1].to_f).to_s : (string[index-1].to_f / string[index+1].to_f).to_s
          string.delete_at(index)
          string.delete_at(index)
          index = 0
        elsif (string[index] == "+" || string[index] == "-") && !string.include?("*") && !string.include?("/")
          string[index-1] = string[index] == "+" ? (string[index-1].to_f + string[index+1].to_f).to_s : (string[index-1].to_f - string[index+1].to_f).to_s
          string.delete_at(index)
          string.delete_at(index)
          index= 0
        end
        index+=1
      end
      string[0].to_f
    end
end