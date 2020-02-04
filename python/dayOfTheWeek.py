#difficulty: easy
#https://leetcode.com/problems/day-of-the-week/

# Given a date, return the corresponding day of the week for that date.

# The input is given as three integers representing the day, month and year respectively.

# Return the answer as one of the following values {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}.

# Input: day = 31, month = 8, year = 2019
# Output: "Saturday"

def dayOfTheWeek(self, day, month, year):
    dotw={1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday",0:"Sunday"}
    m={1:1,2:4,3:4,4:0,5:2,6:5,7:0,8:3,9:6,10:1,11:4,12:6}
    year=str(year)
    c = int(year[0]+year[1])
    y = int(year[2]+year[3])
    num = math.floor(y/4)+day+m[month]+y-1
    if int(year)%4 ==0 and (month == 1 or month ==2):
    num=num-1
    if c==20:
    num= num+6
    return dotw[int(num)%7]