# 5 kyu kata
# https://www.codewars.com/kata/calculating-with-functions/train/ruby
#
# This time we want to write calculations using functions and get the results. Let's have a look at some examples:
#
# Ruby:
#
# seven(times(five)) # must return 35
# four(plus(nine)) # must return 13
# eight(minus(three)) # must return 5
# six(divided_by(two)) # must return 3
# Requirements:
#
# There must be a function for each number from 0 ("zero") to 9 ("nine")
# There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
# Each calculation consist of exactly one operation and two numbers
# The most outer function represents the left operand, the most inner function represents the right operand
# Divison should be integer division, e.g eight(dividedBy(three()))/eight(divided_by(three)) should return 2, not 2.666666...

def zero(arg=nil)
  (!!arg) ? eval("0"+arg): 0
end
def one(arg=nil)
  (!!arg) ? eval("1"+arg): 1
end
def two(arg=nil)
  (!!arg) ? eval("2"+arg): 2
end
def three(arg=nil)
  (!!arg) ? eval("3"+arg): 3
end
def four(arg=nil)
  (!!arg) ? eval("4"+arg): 4
end
def five(arg=nil)
  (!!arg) ? eval("5"+arg): 5
end
def six(arg=nil)
  (!!arg) ? eval("6"+arg): 6
end
def seven(arg=nil)
  (!!arg) ? eval("7"+arg): 7
end
def eight(arg=nil)
  (!!arg) ? eval("8"+arg): 8
end
def nine(arg=nil)
  (!!arg) ? eval("9"+arg): 9
end
def plus(num)
  return "+#{num}"
end
def minus(num)
  return "-#{num}"
end
def times(num)
  return "*#{num}"
end
def divided_by(num)
  return "/#{num}"
end
