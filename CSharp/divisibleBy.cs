// 8 kyu kata
// https://www.codewars.com/kata/55edaba99da3a9c84000003b
//
// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.
//
using System.Linq;

public class Kata
{
  public static int[] DivisibleBy(int[] numbers, int divisor)
  {
    return numbers.Where(x => x%divisor == 0).ToArray();
  }
}
