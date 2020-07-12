var pathSum = function(root, sum) {
    if (!root) return 0;
    return (
      pathSumOnlyStart(root, sum) +
      pathSum(root.left, sum) +
      pathSum(root.right, sum)
    );
  };
  
  const pathSumOnlyStart = (root, sum) => {
    if (!root) return 0;
    const self = root.val === sum ? 1 : 0;
    return (
      self +
      pathSumOnlyStart(root.left, sum - root.val) +
      pathSumOnlyStart(root.right, sum - root.val)
    );
  };

let tree =  {
    val: 10,
    left:  {
      val: 5,
      left:  { val: 3, left: [], right: [] },
      right:  { val: 2, left: null, right: [] }
    },
    right:  {
      val: -3,
      left: null,
      right:  { val: 11, left: null, right: null }
    }
  }
  console.log(pathSum(tree, 8))