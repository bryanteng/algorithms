// 7 kyu Kata
// https://www.codewars.com/kata/51c7d8268a35b6b8b40002f2
//
// Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.
//
// The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.
//
// Example:
//
// solution({"a" => 1, "b" => '2'}) # should return "a = 1,b = 2"

using System;
using System.Collections.Generic;

public static class Kata
{
  public static string StringifyDict<TKey, TValue>(Dictionary<TKey, TValue> hash)
  {
      var vals = new List<string>();
      foreach(TKey s in hash.Keys) vals.Add(s+ " = "+hash[s]);
      return String.Join(",", vals.ToArray());
  }
}
