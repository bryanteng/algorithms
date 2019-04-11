// 7 kyu kata
// https://www.codewars.com/kata/changing-letters/csharp

// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

using System.Linq;
public static class Kata
{
  public static string Swap(string s)
  {
    return string.Concat(s.Select(x => "aeiou".Contains(x) ? char.ToUpper(x) : x));
  }
}