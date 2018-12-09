/* 7 kyu kata
https://www.codewars.com/kata/password-system/train/java
In Star Labs we use password system to unlock the lab doors and only Team Flash is given the password for these labs. Password system comprises of n x n keypad (n>0).

One day Zoom saw Cisco using the password. He figured out that the password is symmetric about the centre point (centre point for n*n keypad will be point with co-ordinates (n/2, n/2)). Now he has to try all possible symmetric combinations to unlock the door. Since he has not enough time he asks you to tell if given password is symmetric or not.

You will be given a m x n binary grid containing elements as 0 if that key is not used and 1 if that key is used. You need to tell whether the given binary grid is symmetric according to the centre point. The grid might not be square.

Write a function helpZoom() that takes an array of integers containing 0 and 1 as input and returns “Yes” or “No” depending on whether the given password is symmetric or not. */

public class Kata {
  public static void main (String[] args){
    boolean ret = helpZoom(new int[]{1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1}) == "Yes";

    System.out.println(ret);
  }
    public static String helpZoom(final int[] key) {
      for(int i = 0; i < key.length/2; i++){
        if(key[i] != key[key.length-1-i]){
          return "No";
        }
      }
      return "Yes";
    }
};
