let obj = {
    val: 1,
    children: [
      { val: 3, children: [{ val: 5, children: [] },{ val: 6, children: [] }] },
      { val: 2, children: [] },
      { val: 4, children: [] }
    ]
  }
// let obj = {
//         val: 3,
//         children: [
//           { val: 1, children: [{ val: 2, children: [] }, { val: 3, children: [] }] },
//           { val: 4, children: [{ val: 5, children: [] },{ val: 6, children: [] }] },
//           { val: 7, children: [{ val: 8, children: [] },{ val: 9, children: [] }] }
//         ]
//       }
  

  var maxDepth = function(root) {
    if (!root) return 0
    let depth = 0
    const dfs = (node, level) => {
        if (node) {
            if (level > depth) depth = level
            console.log(node.val)
            if (node.children.length) {
                for(child of node.children){
                    dfs(child, ++level)
                }
            }
        }
    }
   
    dfs(root, 1)
    
    return depth
    
};
maxDepth(obj)