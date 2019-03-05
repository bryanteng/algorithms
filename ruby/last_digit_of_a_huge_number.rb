# 3 kyu kata
# https://www.codewars.com/kata/5518a860a73e708c0a000027

# For a given list [x1, x2, x3, ..., xn] compute the last (decimal) digit of x1 ^ (x2 ^ (x3 ^ (... ^ xn))).

# e.g: last_digit([3, 4, 2]) == 1 because 3 ^ (4 ^ 2) = 3 ^ 16 = 43046721.

# Beware: Powers grow incredibly fast. For example, 9 ^ (9 ^ 9) has more than 369 millions of digits. lastDigit has to deal with such numbers efficiently.

# Assume 0 ^ 0 = 1 and treat empty list as equals to 1.

# This kata generalizes Last digit of a large number; you may find useful to solve it beforehand.

 def last_digit(lst)
    return 1 if lst.empty?
    if lst.length == 1
      return lst[0].digits[0]
    else
      lst[-2] = last_num(lst[-2],lst[-1])
      lst.delete_at(-1)
      last_digit(lst)
    end
  end
  
  def last_num(n1, n2)
    return 1 if n1 == 0 && n2 == 0
    (n1**(n2 > 4 ? n2%4+4 : n2))
  end