# Multiples of 3 and 5
# Problem 1
# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
#
# Find the sum of all the multiples of 3 or 5 below 1000.

def sum_multiples()
  index = sum = 0
  while index < 1000
    sum += index if index%3 == 0 || index%5 == 0
    index+=1
  end
  sum
end

p sum_multiples()
