# 5 kyu kata
# https://www.codewars.com/kata/5541f58a944b85ce6d00006a
# The Fibonacci numbers are the numbers in the following integer sequence (Fn):
#
# 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...
#
# such as
#
# F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.
#
# Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying
#
# F(n) * F(n+1) = prod.
#
# Your function productFib takes an integer (prod) and returns an array:
#
# [F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
# depending on the language if F(n) * F(n+1) = prod.
#
# If you don't find two consecutive F(m) verifying F(m) * F(m+1) = prodyou will return
#
# [F(m), F(m+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
# F(m) being the smallest one such as F(m) * F(m+1) > prod.
def productFib(prod)
    fib = [0,1]
    product = fib[-2]*fib[-1]
    while product < prod
      fib.push(fib[-2]+fib[-1])
      product = fib[-2]*fib[-1]
      return [fib[-2],fib[-1], true] if product == prod
    end
    return [fib[-2],fib[-1], false]
end

puts productFib(4895) == [55, 89, true]
puts productFib(5895) == [89, 144, false]
