var lastStoneWeight = function(stones) {
    if(stones.length <= 1){
        return [][0] || 0
    }
   return lastStoneWeight([stones.sort((a, b) => b - a).slice(0, 2)[0]-stones.sort((a, b) => b - a).slice(0, 2)[1] ,...stones.slice(2, stones.length)])
};
console.log(lastStoneWeight([2,7,4,1,8,1]))