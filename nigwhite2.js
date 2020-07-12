var hasPathSum = function(root, inp) {
    let next = Infinity;
    let dfs=(root)=>{
        if(!root) return;
        if(root.val>inp){
          next = Math.min(next, root.val)  
        } 
        dfs(root.left);
        dfs(root.right);
    }
    dfs(root)
    return  next == Infinity ? null : next;
};
let obj =  {
    val: 20,
    left: {
        val: 9,
        left: {
            val: 5,
            left: null,
            right: null
          },
        right: {
            val: 12,
            left: {
                val: 11,
                left: null,
                right: null
              },
            right: {
                val: 14,
                left: null,
                right: null
              }
          }
      },
    right: {
        val: 25,
        left: null,
        right: null
      }
  }
  console.log(hasPathSum(obj, 4))