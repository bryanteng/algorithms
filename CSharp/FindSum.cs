// 7 kyu kata
// https://www.codewars.com/kata/sum-of-all-the-multiples-of-3-or-5/train/csharp

// Your task is to write function findSum.

// Upto and including n, this function will return the sum of all multiples of 3 and 5.

// For example:

// findSum(5) should return 8 (3 + 5)

// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

namespace Solution
{
  public static class Program
  {
    public static int findSum(int n)
    {
      int ret = 0;
      int i = 0;
      while(i <= n){
        if(i%3 == 0 || i%5 == 0) ret+=i;
        i+=1;
      }
      return ret;
    }
  }
}