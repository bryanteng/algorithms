// 7 kyu kata
// https://www.codewars.com/kata/566fc12495810954b1000030/solutions/csharp/me/best_practice

// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer. Square all numbers k (0 <= k <= n) between 0 and n. Count the numbers of digits d used in the writing of all the k**2. Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.
// n = 10, d = 1, the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in 1, 16, 81, 100. The total count is then 4.

// nb_dig(25, 1):
// the numbers of interest are
// 1, 4, 9, 10, 11, 12, 13, 14, 19, 21 which squared are 1, 16, 81, 100, 121, 144, 169, 196, 361, 441
// so there are 11 digits `1` for the squares of numbers between 0 and 25.

using System.Linq;
public class CountDig 
{
    
    public static int NbDig(int n, int d) 
    {
      int res = 0; 
      string find = $"{d}";
      for(int num = 0; num <= n; num++){
        string temp = $"{num*num}";
        int num_count = temp.Replace(find,"").Length;
        res += temp.Length -num_count;
      }
      return res;
    }
}