
var ladderLength = function(beginWord, endWord, wordList) {
    let queue = [beginWord]
    let count = 1;
    while(queue.length){
        for(let i=queue.length; i>0; i--){
            let word = queue.shift();
            if(word === endWord) return count;
            for(let j=0; j<wordList.length; j++){
                if(word == wordList[j]){
                    return 1;
                }
                let diff = 0;
                for(let k=0; k<word.length; k++){
                    if(word[k] !== wordList[j][k]){
                        diff++
                    }
                }
                if(diff==1){
                    queue.push(wordList[j])
                    wordList.splice(j,1)
                }
            }
        }
        count++
    }
    return 0;
}

console.log(ladderLength('a', 'c', [ 'a', 'b', 'c' ]))
// console.log(ladderLength("hit","cog",["hot","dot","dog","lot","log","cog"]))