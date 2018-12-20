# 5 kyu kata

def direction_reducer(a)
  index = 0
  vertical = 0
  horizontal = 0
  ret = []
  while index < a.length
    vertical+=1 if a[index] == "NORTH"
    vertical-=1 if a[index] == "SOUTH"
    horizontal+=1 if a[index] == "EAST"
    horizontal-=1 if a[index] == "WEST"
  index+=1
  end

  vertical > 0 ? vertical.times do ret.push("NORTH") end : nil
  vertical < 0 ? vertical.abs.times do ret.push("SOUTH") end : nil

  horizontal > 0 ? horizontal.times do ret.push("EAST") end : nil
  horizontal < 0 ? horizontal.abs.times do ret.push("WEST") end : nil
  ret
end
