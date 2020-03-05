# difficulty: medium
# https://leetcode.com/problems/combination-sum/

# Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

# The same repeated number may be chosen from candidates unlimited number of times.

# Note:

# All numbers (including target) will be positive integers.
# The solution set must not contain duplicate combinations.
# Example 1:

# Input: candidates = [2,3,6,7], target = 7,
# A solution set is:
# [
#   [7],
#   [2,2,3]
# ]

def combinationSum(self, candidates, target):
    """
    :type candidates: List[int]
    :type target: int
    :rtype: List[List[int]]
    """
    output = []
    def recursive(digits,candidates,value):
        if value == target:
          output.append(digits)
        else:
          for i in range(len(candidates)):
            if value+candidates[i] <= target:
              recursive(digits+[candidates[i]], candidates[i:], value+candidates[i])

    recursive([],candidates,0)
    return output
