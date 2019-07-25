# difficulty: medium
# https://leetcode.com/problems/integer-replacement/
#
# Given a positive integer n and you can do operations as follow:
#
# If n is even, replace n with n/2.
# If n is odd, you can replace n with either n + 1 or n - 1.
# What is the minimum number of replacements needed for n to become 1?

def integer_replacement(n)
count = 0
  until n == 1
    if n%2 == 0
      n = n/2
    elsif n == 3
      return count+2
    else
      (n+1) % 4 == 0 ? n+=1 : n-=1
    end
    count+=1
  end
  count
end
