var isAlienSorted = function(words, order) {
    let charPosition = {};
    for(let position = 0; position < order.length; position++){
        charPosition[order[position]] = position;
    }
    for(let i = 1; i < words.length; i++){
        const prev = words[i-1];
        const curr = words[i];
        if(charPosition[prev[0]] > charPosition[curr[0]]) {
            return false;
        }
        else if(prev[0] === curr[0]){
            let pointer = 1;
            while(prev[pointer] === curr[pointer]) pointer++;
            if(!curr[pointer]) return false;
            if(charPosition[prev[pointer]] > charPosition[curr[pointer]]) return false;
        }
    }
    return true
};
console.log(isAlienSorted(["hello","leetcode"], "hlabcdefgijkmnopqrstuvwxyz"))