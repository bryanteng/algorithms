// difficulty: easy
// https://www.hackerrank.com/challenges/strong-password/problem
//
// Louise joined a social networking site to stay in touch with her friends. The signup page required her to input a name and a password. However, the password must be strong. The website considers a password to be strong if it satisfies the following criteria:
//
// Its length is at least 6.
// It contains at least one digit.
// It contains at least one lowercase English character.
// It contains at least one uppercase English character.
// It contains at least one special character. The special characters are: !@#$%^&*()-+
// She typed a random string of length n in the password field but wasn't sure if it was strong. Given the string she typed, can you find the minimum number of characters she must add to make her password strong?
//
// Note: Here's the set of types of characters in a form you can paste in your solution:
//
// numbers = "0123456789"
// lower_case = "abcdefghijklmnopqrstuvwxyz"
// upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// special_characters = "!@#$%^&*()-+"

function minimumNumber(n, password) {
  let problems = 0

  if(!password.match(/[!@#\$%\^&\*\(\)\-+]/)) problems += 1
  if(!password.match(/[a-z]/g)) problems += 1
  if(!password.match(/[A-Z]/g)) problems += 1
  if(!password.match(/[0-9]/g)) problems += 1

  return problems + Math.max(0, 6-n-problems)
}
