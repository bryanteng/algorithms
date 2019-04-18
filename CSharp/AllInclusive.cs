// 7 kyu Kata
// https://www.codewars.com/kata/5700c9acc1555755be00027e
//
// Input:
//
// a string strng
// an array of strings arr
// Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):
//
// a boolean true if all rotations of strng are included in arr (C returns 1)
// false otherwise (C returns 0)

using System;
using System.Collections.Generic;

public class Rotations
{
  public static Boolean ContainAllRots(string strng, List<string> arr)
  {
    List<string> rotations = new List<string>();
    foreach(char letter in strng){
      strng = strng.Remove(0,1)+strng[0];
      rotations.Add(strng);
    }
    foreach(string word in rotations) if(!arr.Contains(word)) return false;
    return true;
    }
}
