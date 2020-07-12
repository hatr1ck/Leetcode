// var isValidBST = function(root) {
//     if(!root) return true;
//     let dfs = (root)=>{
//         if(!root) return true;
//         if(root.left && root.val < root.left.val){
//             return false
//         }
//         if(root.right && root.val > root.right.val){
//             return false
//         }
//         return dfs(root.right) && dfs(root.left)
//     }
//     return dfs(root)
// };
var isValidBST = function(root) {
    let prev = -Infinity;
    let flag = true;
    const dfs = (node) => {
        console.log(!node)
        if(!node || !flag) return;
        console.log('ass', node.val)
        dfs(node.left);
        console.log('execute', node.val)
        if(node.val <= prev) flag = false;
        prev = node.val;
        dfs(node.right);
    }
    dfs(root);
    return flag;
};
let tree =   {
    val: 10,
    left:  { val: 3, left: { val: 1, left: { val: 0, left: null, right: null }, right: { val: 2, left: { val: 1.5, left: null, right: null }, right: null } }, right: null },
    right:  {
      val: 21,
      left:  { val: 15, left: { val: 12, left: { val: 11, left: null, right: null }, right: { val: 13, left: null, right: { val: 14, left: null, right: null } } }, right: null },
      right:  { val: 22, left: null, right: { val: 23, left: null, right: null } }
    }
  }
// let tree =  {
//     val: 2,
//     left:  { val: 1, left: null, right: null },
//     right: null
//   }
  
  console.log(isValidBST(tree))