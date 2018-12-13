# Move every letter in the provided string forward 10 letters through the alphabet.
#
# If it goes past 'z', start again at 'a'.
#
# Input will be a string with length > 0.

def move_ten(st)
  alphabet="abcdefghijklmnopqrstuvwxyz"
  st.chars.map do |x|
    temp = alphabet.rindex(x)+10
    temp >= 26 ? alphabet[temp-26] : alphabet[temp]
  end.join
end
