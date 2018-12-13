# One suggestion to build a satisfactory password is to start with a memorable phrase or sentence and make a password by extracting the first letter of each word.
#
# Even better is to replace some of those letters with numbers (e.g., the letter O can be replaced with the number 0):
#
# instead of including i or I put the number 1 in the password;
# instead of including o or O put the number 0 in the password;
# instead of including s or S put the number 5 in the password.

def make_password(phrase)
  phrase.split(" ").map do |x|
    x = x[0]
    x = "1" if x == "i" || x == "I"
    x = "0" if x == "o" || x == "O"
    x = "5" if x == "s" || x == "S"
    x
  end.join()
end
