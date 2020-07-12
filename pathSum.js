var hasPathSum = function(root, sum) {
    if(!root){
        return false
    }
    
    let dfs=(root, val=0)=>{
        if(!root) return;
        val+=root.val;
        if(!root.right && !root.left && val==sum){
            return true;
        }
        return dfs(root.left, val) || dfs(root.right, val)
    }
    return dfs(root) || false;
};
let obj =  {
    val: -3,
    left:  null,
    right:  {
      val: -2,
      left:  null,
      right:  null 
    }
  }
  console.log(hasPathSum(obj, -5))