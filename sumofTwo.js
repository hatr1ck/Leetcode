function twoSum(arr1,arr2, v){
    let hash = {}
    for(let i = 0; i<arr1.length; i++){
        console.log(v - arr1[i])
        hash[v - arr1[i]] = true;
    }
    console.log(hash)
    for(let i = 0; i<arr2.length; i++){
        if(hash[arr2[i]]){
            return true;
        }
    }
    return false;
}

console.log(twoSum([0,0,-8,3012], [-10,40,-3,9], -18))