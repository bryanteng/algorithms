// 7 kyu Kata
// https://www.codewars.com/kata/vowel-count/train/csharp/5ceeaca4cac0a50027703ed3

//Return the number (count) of vowels in the given string.

using System;
using System.Linq;
using System.Collections.Generic;

public static class Kata
{
    public static int GetVowelCount(string str)
    {
        return str.ToCharArray().Where(x=>"aeiou".Contains(char.ToLower(x))).ToArray().Length;
    }
}