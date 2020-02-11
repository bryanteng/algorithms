# difficulty: medium
# https://leetcode.com/problems/combinations/

# Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

# Example:

# Input: n = 4, k = 2
# Output: [[2,4],  [3,4],  [2,3],  [1,2],  [1,3],  [1,4]]

def combine(self, n, k):
    """
    :type n: int
    :type k: int
    :rtype: List[List[int]]
    """
    if n == 0 or k == 0:
        return []
    output = []
    candidates = range(1,n+1)

    def recursive(digits, candidates):
        if len(digits) == k:
            output.append(digits)
            return True
        elif len(digits) > k:
            return False
        else:
            for i in range(len(candidates)):
            recursive(digits+[candidates[i]], candidates[i+1:])

    recursive([], candidates)
    return output