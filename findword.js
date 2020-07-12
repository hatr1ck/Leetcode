function exist(arr, word) {
  const ROW_NUM = arr.length,
    COL_NUM = arr[0].length;
  for (let i = 0; i < ROW_NUM; i++) {
    for (let j = 0; j < COL_NUM; j++) {
      if (word[0] == arr[i][j] && start(i, j, 0)) {
        return true;
      }
    }
  }

  function start(i, j, count) {
    if (count == word.length) return true;
    if (
      i < 0 ||
      i >= ROW_NUM ||
      j > COL_NUM ||
      j < 0 ||
      arr[i][j] !== word[count]
    )
      return false;
    arr[i][j] = "#";
    if (
      start(i + 1, j, count + 1) ||
      start(i, j - 1, count + 1) ||
      start(i, j + 1, count + 1) ||
      start(i - 1, j, count + 1)
    )
      return true;
    arr[i][j] = word[count];
    console.log(arr);
  }
  return false;
}

// function getNeighbors(i, j, board) {
//   let neighbors = [];
//   if(j < board[0].length - 1 ) neighbors.push([i, j+1]);
//   if(j > 0) neighbors.push([i, j-1]);
//   if(i > 0 ) neighbors.push([i-1, j]);
//   if(i < board.length - 1) neighbors.push([i+1, j]);
//   return neighbors;
// }
console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "SEE"
  )
); // true

// var exist = function(board, word) {
//   let visited = board.map(row=> row.map(letter =>false));
//   let wordIdx = 0;
//   for(let i=0; i< board.length; i++) {
//       for(let j=0; j< board[i].length; j++) {
//           const isExist = expand(i, j, visited, board, word, wordIdx);
//           if(isExist) {
//               return true;
//           }
//       }
//   }
//   return false;
// };

// function expand(i, j, visited, board, word, wordIdx) {
//   if(!visited[i][j] && board[i][j] === word[wordIdx]) {
//       visited[i][j] = true;
//       if(wordIdx === word.length-1) {
//           return true;
//       }
//       let neighbors = getNeighbors(i, j, board);
//       for(let neighbor of neighbors) {
//           let isExist = expand(neighbor[0], neighbor[1], visited, board, word, wordIdx+1);
//           if(isExist) return true;
//       }
//       visited[i][j] = false;
//   }
//   return false;
// }
