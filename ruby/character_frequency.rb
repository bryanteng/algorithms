# Given a sentence "this is a test string", find the frequency of each character in the sentence
# , ignoring whitespace
# t:4, h:1, i:3, ... etc.. don't count " ":4

def character_frequency(string)
  character_hash = {}
  string.chars.each do |character|
    character_hash[character] ? character_hash[character] += 1 : character_hash[character] = 1 if character != " "
  end
  character_hash
end

 p character_frequency("this is a test string")
