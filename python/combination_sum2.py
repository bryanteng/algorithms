# difficulty: medium
# https://leetcode.com/problems/combination-sum-ii/
#
# Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.
#
# Each number in candidates may only be used once in the combination.
#
# Note:
#
# All numbers (including target) will be positive integers.
# The solution set must not contain duplicate combinations.
# Example 1:
#
# Input: candidates = [10,1,2,7,6,1,5], target = 8,
# A solution set is:
# [
#   [1, 7],
#   [1, 2, 5],
#   [2, 6],
#   [1, 1, 6]
# ]

def combinationSum2(self, candidates, target):
    """
    :type candidates: List[int]
    :type target: int
    :rtype: List[List[int]]
    """
    s = set()
    if not candidates:
     return []
    candidates = sorted(candidates)
    def recursive(digits,candidates,value):
        if value == target:
          s.add(tuple(digits))
          return True
        else:
          for i in range(len(candidates)):
            if value+candidates[i] <= target:
              recursive(digits+[candidates[i]], candidates[i+1:], value+candidates[i])

    recursive([],candidates,0)

    return s
