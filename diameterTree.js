var diameterOfBinaryTree = function(root) {
    let maxSize = 0;
    (function getDepth(node) {
      if (node == null) return 0;
      let left = getDepth(node.left);
      let right = getDepth(node.right);
      maxSize = Math.max(maxSize,left+right)
      return 1 + Math.max(left,right);
    })(root)
    return maxSize;
  };

let tree =    {
    val: 2,
    left:  {
      val: 3,
      left:  { val: 1, left: null, right: null },
      right: null
    },
    right: null
  }
  
  
  console.log(diameterOfBinaryTree(tree))
