// 7 kyu kata
// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

using System;
using System.Linq;

public static class Kata
{
  public static string ReverseWords(string str)
  {
		return String.Join(" ",str.Split(" ").Select(x=> String.Join("",x.ToCharArray().Reverse())));
  }
}