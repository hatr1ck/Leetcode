var solve = function(board) {
    for(let i=0; i<board[0].length; i++){
        if(board[0][i]=="O"){
            DFS(0,i)
        }
        if(board[board.length-1][i]=="O"){
            DFS(board.length-1,i)
        }
    }
    for(let i=0; i<board.length; i++){
        if(board[i][0]=="O"){
            DFS(i,0)
        }
        if(board[i][board[0].length-1]=="O"){
            DFS(i,board[0].length-1)
        }
    }
    function DFS(r, c) {
        if(r >= board.length || r < 0 || c >= board[0].length || c < 0 || board[r][c] !== 'O') return;
        board[r][c] = 'V';
        // up
        DFS(r-1, c);
        // down
        DFS(r+1, c);
        // right 
        DFS(r, c-1);
        // left
        DFS(r, c+1);
    }
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[i].length; j++){
            if(board[i][j] == "V"){
                board[i][j] = "O"
            }
            else if(board[i][j] == "O"){
                board[i][j] = "X"
            }
        }
        
    }
    return board
};

console.log(solve([
    [ 'X', 'X', 'X', 'X' ],
    [ 'X', 'O', 'O', 'X' ],
    [ 'X', 'X', 'O', 'X' ],
    [ 'X', 'X', 'X', 'X' ]
  ]))
  