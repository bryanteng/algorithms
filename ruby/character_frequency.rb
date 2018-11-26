# Given a sentence "this is a test string", find the frequency of each character in the sentence
# , ignoring whitespace
# t:4, h:1, i:3, ... etc.. don't count " ":4

def character_frequency(string)

  character_hash = Hash.new(0)
  string.chars.each do |character|
    if character != " "
      if character_hash[character]
        character_hash[character] = character_hash[character] + 1
      else
        character_hash[character] = 1
      end
    end
  end
  return character_hash
end

 p character_frequency("this is a test string")
