var numIslands = function(grid) {
    let counter = 0;
    for(let i=0; i<grid.length;i++){
        for(let j=0; j<grid[i].length;j++){
            if(grid[i][j] == '1'){
                DFS(i,j)
                counter++
            }
        }
        
    }
    function DFS(i,j){
        if(i<0 || i>=grid.length || j<0 || j>grid[0].length-1 || grid[i][j]=='0') return;
        grid[i][j]='0';
        DFS(i,j+1)
        DFS(i,j-1)
        DFS(i-1,j)
        DFS(i+1,j)
        
    }
    console.log(grid, counter)
    return counter;
};

numIslands([
    [ '1', '1', '1', '1', '0' ],
    [ '1', '1', '0', '1', '0' ],
    [ '1', '1', '0', '0', '0' ],
    [ '0', '0', '0', '0', '0' ]
  ])