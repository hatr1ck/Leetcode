var maxProfit = function(prices) {
    let max = 0;
    let min = Infinity;
    for(let i=0; i<prices.length; i++){
        if(min>prices[i]) min=prices[i]
        else max=Math.max(max, prices[i]-min)
    }
    return max;
};
console.log(maxProfit([7,1,5,3,6,4]))