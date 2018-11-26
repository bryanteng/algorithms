# given a word output true if it's a palindrome and false if it is not,
# NOTE: You cannot use the reverse method this time

def word_palindrome(word)

  index = 0
  end_point = -1

  while index < word.length/2
    return false if word[index] != word[end_point-index]
    index+=1
  end
  return true

end
p word_palindrome("dad")
