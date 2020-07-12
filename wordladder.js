var ladderLength = function(beginWord, endWord, wordList) {
    const queue = [beginWord];
    let ret = 0;
    const wordSet = new Set(wordList);
    const characters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    while(queue.length > 0) {
      for(let i=queue.length; i>0; i--) {
        const word = queue.shift();
        if(word === endWord) return ret+1;
        for(let j=0; j<word.length; j++) {
          for(const char of characters) {
            const candidate = word.substring(0, j) + char + word.substring(j+1);
            if(wordSet.has(candidate) && word !== candidate) {
              queue.push(candidate);
              console.log(word, queue, ret)
              wordSet.delete(candidate);
            } 
          }
        }
      }
      ret++;
    }
    return 0;
  };
  console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"]))