// function levelOrderBottom(root) {
//     return next(root ? [root] : [], []);
//         function next(nodes, arr) {
//         if (nodes.length === 0) return arr;
//         const vals = [], q = [];
//         for (let node of nodes) {
//             vals.push(node.val);
//             node.left && q.push(node.left);
//             node.right && q.push(node.right);
//         }
//             arr.unshift(vals);
//             console.log(q)
            
//             return next(q, arr);
//         }  
//   }


//   function levelOrderBottom(root) {
//     const ret = [];
//     next(root, 0);
//     return ret.reverse(); // <-- It is better not to do this
    
//     function next(node, index) {
//       if (!node) return;
//       !ret[index] && (ret[index] = []);
//       ret[index].push(node.val);
//       next(node.left, index + 1);
//       next(node.right, index + 1);
//     }
//   }

let levelOrderBottom = (root)=>{

    let bfs = (root, arr=[])=>{
        if(root.length == 0) return arr;
        let nodes =[], values = [];
        for(node of root){
            values.push(node.val)
            if(node.left) nodes.push(node.left)
            if(node.right) nodes.push(node.right)
        }
        console.log(nodes)
        arr.unshift(values)
        return bfs(nodes, arr)
    }
    return bfs([root])
}

console.log('res',levelOrderBottom({
    val: 3,
    left:  {
        val: 9,
        left:  { val: 2, left: null, right: null },
        right:  { val: 3, left: null, right: { val: 69, left: null, right: null } }
      },
    right:  {
        val: 20,
        left:  { val: 15, left: null, right: null },
        right:  { val: 7, left: null, right: null }
      }
  }
  ))