let generateParenthesis = function(prices) {
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
      if (prices[i] > prices[i - 1]) {
        profit += prices[i] - prices[i - 1];
      }
    }
    return profit;    
  };

console.log(generateParenthesis([7,1,5,69,70,4]))