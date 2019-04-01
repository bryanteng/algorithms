def num_pal(x)
  index = 0
  x = x.digits
  while index < x.length/2
    return false if x[index] != x[x.length-1-index]
    index+=1
  end
  true 
end

num_pal(121)

def reverse(x)
    return 0 if (x > 2147483647 || x < -2147483647)
    isNeg = x < 0 ? "-" : ""
    x = isNeg ? x : x*-1
    (isNeg+ x.to_s.reverse).to_i
end

reverse(-123)