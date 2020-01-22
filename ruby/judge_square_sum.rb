#difficulty: easy
#https://leetcode.com/problems/sum-of-square-numbers/

#Given a non-negative integer c, your task is to decide whether there're two integers a and b such that a2 + b2 = c.

def judge_square_sum(c)
    return false if c < 0
    i = 0
    arr = []
    stop = Math.sqrt(c).to_i
    while i <= stop
        arr.push(i*i)
        i+=1
    end
    i = 0
    i2 = arr.length-1
    while i2 >= i
        temp = arr[i] + arr[i2]
        return true if temp == c
        if temp > c
            i2-=1
        elsif temp < c
            i +=1
        end
     end
    false
end