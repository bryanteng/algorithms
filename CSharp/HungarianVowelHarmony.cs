// 7 kyu kata
// https://www.codewars.com/kata/57fd696e26b06857eb0011e7
// Vowel harmony is a phenomenon in some languages. It means that "A vowel or vowels in a word are changed to sound the same (thus "in harmony.")" (wikipedia). This kata is based on vowel harmony in Hungarian.

// Task:
// Your goal is to create a function dative() (Dative() in C#) which returns the valid form of a valid Hungarian word w in dative case i. e. append the correct suffix nek or nak to the word w based on vowel harmony rules.

// Vowel Harmony Rules (simplified)
// When the last vowel in the word is

// a front vowel (e, é, i, í, ö, ő, ü, ű) the suffix is -nek
// a back vowel (a, á, o, ó, u, ú) the suffix is -nak

public static class Kata {
    public static string Dative(string word) {
    char[] front_vowels = new char[]{'e', 'é', 'i', 'í', 'ö', 'ő', 'ü', 'ű'};
    char[] back_vowels = new char[]{'a', 'á', 'o', 'ó', 'u', 'ú'};
    for(int i = word.Length-1; i>=0; i--){
      if(front_vowels.Contains(word[i])) return word+"nek";
      if(back_vowels.Contains(word[i])) return word+"nak";
    }
     return "dative";    }
}