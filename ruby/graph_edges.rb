# Count the number of different edges in a given undirected graph with no loops and multiple edges.
# For
#
# matrix = [[false, true, true],
#           [true, false, false],
#           [true, false, false]]
# the output should be graphEdges(matrix) = 2.
#
# [execution time limit] 4 seconds (rb)

def graphEdges(matrix)
    matrix.uniq.length == 1 ? 0 : matrix.uniq.length
end

puts graphEdges([[false,true,true],
 [true,false,false],
 [true,false,false]]) == 2

 puts graphEdges([[false,false,false],
 [false,false,false],
 [false,false,false]]) == 0
