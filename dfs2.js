let obj = {
    val: 1,
    left: { val: 2, left: null, right: null },
    right: { val: 3, left: null, right: null }
  }
  let sumNumbers = (root)=>{
    let sum = 0;
    let dfs = (root, value)=>{
        if(!root) return 

        value=value*10+root.val
        if(!root.left && !root.right){
            sum+=value;
        }
        dfs(root.right, value)
        dfs(root.left, value)
    }
    dfs(root, 0)
    return sum
}
console.log(sumNumbers(obj));