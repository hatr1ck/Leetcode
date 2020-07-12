function maximumToys(prices, k) {
    
    let result = 0;
    prices.sort((a,b)=>{
        return a-b;
    })
    for(let i=0; i<prices.length; i++){
        
        console.log(result+=prices[i] >= k)
        if((result+=prices[i]) >= k){
            
            return i;
        }
        result += prices[i];
    }
    
    }
console.log(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50))
