var kthSmallest = function (root, k) {
  let res = -1;
  function dfs(root) {
    if (!root) return;
    dfs(root.left);
    if (--k == 0) res = root.val;
    dfs(root.right);
  }
  dfs(root, k);
  return res;
};

let tree = {
  val: 3,
  left: {
    val: 1,
    left: null,
    right: {
      val: 2,
      left: null,
      right: null,
    },
  },
  right: {
    val: 4,
    left: null,
    right: null,
  },
};
console.log(kthSmallest(tree, 1));
