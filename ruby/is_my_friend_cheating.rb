# 5 kyu kata
# https://www.codewars.com/kata/5547cc7dcad755e480000004
# Share this kata:
# A friend of mine takes a sequence of numbers from 1 to n (where n > 0).
# Within that sequence, he chooses two numbers, a and b.
# He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
# Given a number n, could you tell me the numbers he excluded from the sequence?
# The function takes the parameter: n (n is always strictly greater than 0) and returns an array or a string (depending on the language) of the form:
#
# [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]
# with all (a, b) which are the possible removed numbers in the sequence 1 to n.
#
# [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or ...will be sorted in increasing order of the "a".
#
# It happens that there are several possible (a, b). The function returns an empty array (or an empty string) if no possible numbers are found which will prove that my friend has not told the truth! (Go: in this case return nil).
#
# (See examples of returns for each language in "RUN SAMPLE TESTS")
def removNb(n)
  n_array = (1..n).to_a
  n_sum = n_array.reduce(:+)
#  return [] if n_array[-2]*n_array[-1] < n_sum-n_array[-2]-n_array[-1]
 retVal = []
  a = n/2
  while a < n
    b = (n_sum-a)/(a+1).to_f
    retVal.push([a,b.to_i]) if b == b.to_i && b < n
    a+=1
  end
  retVal
end

puts removNb(26) == [[15, 21], [21, 15]]
puts removNb(100) == []
puts removNb(101) == [[55, 91], [91, 55]]
puts removNb(102) == [[70, 73], [73, 70]]
puts removNb(1006) == [[546, 925], [925, 546]]
