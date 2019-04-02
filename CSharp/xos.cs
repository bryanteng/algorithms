// 7 kyu kata
// https://www.codewars.com/kata/exes-and-ohs/csharp

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

using System;
using System.Text.RegularExpressions;

public static class Kata 
{
  public static bool XO (string input)
  {
   Regex rx = new Regex("[X]", RegexOptions.IgnoreCase);
   Regex o = new Regex("[o]", RegexOptions.IgnoreCase);
   return o.Replace(input,"").Length == rx.Replace(input,"").Length;
  }
}