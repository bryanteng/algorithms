// 5 kyu kata
// https://www.codewars.com/kata/one-line-task-integer-average/train/javascript

// Given an array of positive integers, return true if the average of its elements is an integer and false otherwise.

// Code Limit
// Less than 46 characters.

// Example
// For a = [1, 2, 3], the output should be true.

// (1 + 2 + 3) / 3 = 2

// For a = [1, 2, 2], the output should be false.

// (1 + 2 + 2) / 3 = 1.666666667

// For a = [1, 9, 8, 2], the output should be true.

// (1 + 9 + 8 + 2) / 4 = 5

integerAverage=a=>!(eval(a.join`+`)%a.length)
