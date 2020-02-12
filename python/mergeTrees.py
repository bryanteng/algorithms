# difficulty: easy
# https://leetcode.com/problems/merge-two-binary-trees/

# Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

# You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.

def mergeTrees(self, t1, t2):
    """
    :type t1: TreeNode
    :type t2: TreeNode
    :rtype: TreeNode
    """
    if not t1 and not t2:
        return None
    if not t1:
        return t2
    elif not t2:
        return t1
    t2.val += t1.val
    t2.left = self.mergeTrees(t1.left,t2.left)
    t2.right = self.mergeTrees(t1.right, t2.right)
    
    return t2
