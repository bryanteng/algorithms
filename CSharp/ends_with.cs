// 7 kyu kata
// https://www.codewars.com/kata/string-ends-with/train/csharp

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

public class Kata
{
  public static bool Solution(string str, string ending)
  {
      bool ret = ending.Length > str.Length ? false : str.Substring(str.Length-ending.Length,ending.Length) == ending;  
      return ret;
  }
}