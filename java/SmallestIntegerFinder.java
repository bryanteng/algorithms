// 8 kyu kata
// Given an array of integers your solution should find the smallest integer.
// https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/

public class SmallestIntegerFinder {
    public static int findSmallestInt(int[] args) {
    int lowest = args[0];
    for(int i = 0; i < args.length; i++){
      if(lowest > args[i]){
        lowest = args[i];
      }
    }
    return lowest;
  }
}
