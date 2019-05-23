// 7 kyu Kata

using System.Linq;

public class Kata
{
  public static int[] GetEvenNumbers(int[] numbers)
  {
    return numbers.Where(num=> num%2==0).ToArray();
  }
}