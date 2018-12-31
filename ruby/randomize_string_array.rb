principles = ["1.  Customer Obsession", "2.  Ownership", "3.  Invent and Simplify", "4.  Are right, a lot", "5.  Hire and Develop the Best", "6.  Insist on the Highest Standards", "7.  Think BIG", "8.  Bias for Action", "9.  Frugality", "10. Learn and Be Curious", "11. Earn Trust", "12. Dive Deep", "13. Have Backbone, and commit", "14. Deliver Results"]

def randomize(array)
  if array.length == 1
    return array[0]
  else
    random = array.sample
    array.delete(random)
    return random + "\n" + randomize(array)
  end
end

print randomize(principles)
