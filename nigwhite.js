var hasPathSum = function(root) {
    if(!root){
        return false;
    }
    let min = Infinity;
    let dfs=(root, val=0)=>{
        if(!root) return;
        val+=root.cost;
        if(root.children.length == 0){
            min=Math.min(min, val)
        }
        for(let i=0; i<root.children.length; i++){
            dfs(root.children[i], val);
        }
    }
    dfs(root)
    console.log(false == {})
    return  min;
};
let obj =  {
    cost: 0,
    children:  [{
        cost: 5,
        children:  [{
            cost: 4,
            children:  []
          }]
      },{
        cost: 3,
        children:  [{
            cost: 2,
            children:  [{
                cost: 1,
                children:  [{
                    cost: 1,
                    children:  []
                  }]
              }]
          },
          {
            cost: 0,
            children:  [{
                cost: 10,
                children:  []
              }]
          }]
      },{
        cost: 6,
        children:  [{
            cost: 1,
            children:  []
          },{
            cost: 5,
            children:  []
          }]
      }]
  }
  console.log(hasPathSum(obj, -5))