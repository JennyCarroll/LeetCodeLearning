// Definition for a binary tree node using a class
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Function to check if root value equals the sum of left and right child values
const checkTree = (root) => root.val === root.left.val + root.right.val;

// Example usage:
const root = new TreeNode(10, new TreeNode(4), new TreeNode(6));
console.log(checkTree(root));

const root2 = new TreeNode(5, new TreeNode(3), new TreeNode(1));
console.log(checkTree(root2));

// O(1)
