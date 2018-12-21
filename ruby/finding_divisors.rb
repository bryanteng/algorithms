# 7 kyu kata
# Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

def divisors(n)
  ret = (2...n).select{|x| n%x == 0}
  ret.length > 0 ? ret : "#{n} is prime"
end
