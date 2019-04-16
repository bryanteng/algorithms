// 7 kyu kata
// https://www.codewars.com/kata/find-the-stray-number/train/csharp

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

using System.Linq;

class Solution 
{
  public static int Stray(int[] numbers)
  {
    var g = numbers.GroupBy(i => i);
    foreach( var grp in g ) if(grp.Count() == 1 ) return grp.Key;
    return 0;
  }
}