// 6 kyu kata
// https://www.codewars.com/kata/one-line-task-multiples-of-3-and-5/javascript

// You're tired of all the kata requiring you to find all the multiples of 3 and 5 below n; you can solve them in your sleep, and half the user-submitted solutions are so inefficient they're painful to even look at! So here you are :)

// The bad news: this is definitely still a kata that requires you to find multiples of 3 and 5 below n. The (potentially) good news is that there are some extra requirements.

// Your goal is to find and return an array representing the number of unique multiples of three, five and both three and five (in that order) below n. To clarify, for example, 6 is a multiple of three; 20 is a multiple of five. 30, however, is a multiple of both three and five, so it gets counted as its own separate category, and the totals for three, and five, separately, do not increase.

// Examples:

// threesAndFives(6) => [1, 1, 0];
// threesAndFives(87) => [23, 12, 5];
// threesAndFives(444) => [118, 59, 29];
// Your code needs to be of the proper complexity; some n will be over a billion. For reference, the solution completes all tests in under 15ms. Luckily, this part shouldn't be too hard to achieve :)

// Finally, your code, inclusive of the function name threesAndFives, must use 60 or fewer characters (<61).

// Good luck and don't forget to upvote!

threesAndFives=(n,x=n-1,b=x/15|0)=>[x/3-b|0,x/5-b|0,b]
