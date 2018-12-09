# 6 kyu Kata
# https://www.codewars.com/kata/57b06f90e298a7b53d000a86
# There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!
#
# The function has two input variables:
#
# customers: an array (list in python) of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
# n: a positive integer, the number of checkout tills.
# The function should return an integer, the total time required.
#
# EDIT: A lot of people have been confused in the comments. To try to prevent any more confusion:
#
# There is only ONE queue, and
# The order of the queue NEVER changes, and
# Assume that the front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
# The diagram on the wiki page I linked to at the bottom of the description may be useful.

def queue_time(customers, n)
  if customers.empty?
    return 0
  else
    array = []
    n.times do
      array << []
    end
    index = 0
    while index < customers.length
      if !customers[index].nil?
        lowest_val_customer(array) << customers[index]
      end
      index+=1
    end
  end
  return array.max_by{|x| x.sum }.sum
end

def lowest_val_customer(array)
  array.min_by{|x| x.sum}
end
