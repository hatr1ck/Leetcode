
console.time('as')
var ladderLength = function(beginWord, endWord, wordList) {
  let queue = [beginWord];
  let count = 0;
  let set = new Set(wordList);
  let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  while(queue.length>0){
    for(let i=queue.length; i>0; i--) {
      const word = queue.shift();
      if(word === endWord) return count+1;
      for(let j=0; j<word.length; j++) {
        for(char of alphabet){
          let candidate = word.substring(0,j) + char + word.substring(j+1)
          if(set.has(candidate) && word!==candidate){
            queue.push(candidate)
            set.delete(candidate)
          }
        }
      }
    }
    count++
  }
  return 0;
};
console.timeEnd('as')
console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"]))