var maxDepth = function(root) {
    let max = 0;
    let dfs = (root, val)=>{
        if(!root) return;
        val++
        if(Math.max(max,val)>max){
             max=val;
        }
        dfs(root.left, val)
        dfs(root.right, val)
    }
    dfs(root, 0)
    return max;
};

let obj =  {
    val: 3,
    left:  { val: 9, left: null, right: null },
    right:  {
      val: 20,
      left:  { val: 15, left: null, right: null },
      right:  { val: 7, left: null, right: null }
    }
  }
  
console.log(maxDepth(obj))