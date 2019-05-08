// 7 kyu kata
// https://www.codewars.com/kata/reverse-a-number/train/csharp

// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

using System;
using System.Linq;

public class Kata
{
    public int ReverseNumber(int n)
    {
      string reverse= String.Join("",Math.Abs(n).ToString().Reverse());
      return Convert.ToInt32(reverse)*(n<0 ? -1: 1); 
      }
}