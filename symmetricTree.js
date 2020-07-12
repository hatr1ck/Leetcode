let tree = { val: 1, 
    left: { val: 0, left: null, right: null }, 
    right: { val: 0, left: null, right: null } 
}
let isSymmetric = (root)=>{
    if(!root){
        return false;
    }
    function dfs(one, two){
        if(!one && !two){
            return true;
        }
        if(!one || !two){
            return false;
        }
        if(one.val !== two.val){
            return false;
        }
        return dfs(one.left, two.right) && dfs(one.right, two.left);
    }
    return dfs(root.left ,root.right)
}

// let tree =  {
//     val: 1,
//     left:  {
//       val: 2,
//       left:  { val: 3, left: null, right: { val: 3, left: null, right: null } },
//       right:  { val: 4, left: null, right: null }
//     },
//     right:  {
//       val: 2,
//       left:  { val: 4, left: null, right: null },
//       right:  { val: 3, left: null, right: { val: 3, left: null, right: null } }
//     }
//   }
console.log(isSymmetric(tree))