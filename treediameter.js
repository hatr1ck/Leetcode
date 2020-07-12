var diameterOfBinaryTree = function(root) {
    var ans= 1;
    depth = (node)=> {
        if (node == null) return 0;
        var L = depth(node.left);
        var R = depth(node.right);
        ans = Math.max(ans, L+R+1);
        return Math.max(L, R) + 1;
    }
    depth(root);
    return ans - 1;
};
console.log(diameterOfBinaryTree({
    val: 1,
    left:  {
      val: 2,
      left:  { val: 4, left: null, right: null },
      right:  { val: 5, left: null, right: null }
    },
    right:  { val: 3, left: null, right: null }
  }
  ))