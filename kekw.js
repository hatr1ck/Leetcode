var exist = function(board, word) {
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[i].length; j++){
            if(board[i][j] == word[0] && dfs(board, i, j, 0, word)){
                return true
            }
        }
    return false;
    }
    function dfs(board, i, j, count, word){
        if(count == word.length){
            return true
        }
        if(i<0 || j<0 || i>=board.length || j>=board[i].length || word[count] != board[i][j]){
            return false
        }
        let temp = board[i][j]
        board[i][j] = " ";
        let found = dfs(board, i+1, j, count+1, word) ||
          dfs(board, i-1, j, count+1, word) ||
          dfs(board, i, j-1, count+1, word) || 
          dfs(board, i, j+1, count+1, word)
        board[i][j] = temp;
        return found
    }
};
console.log(exist([
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E']
  ], "SEE"))