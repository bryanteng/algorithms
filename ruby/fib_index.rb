# Given an index N, output the value(single number) at this index in the fibonacci sequence recursively
# fib sequence: 1,1,2,3,5,8,13,21
# index:        1,2,3,4,5,6,7, 8
# if i give N = 6, output should be 8

# fib(5) = fib(4) + fib(3)
# fib(n) = fib(n-1) + fib(n-2)
def fib(n)

  if n == 1 or n == 2
    return 1
  else
    return fib(n-1) + fib(n-2)
  end

end

p fib(6)
