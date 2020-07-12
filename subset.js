function subset(arr){
    let res = [[]];
    for(let i=0; i<arr.length; i++){
        let copy = res.slice();
        for(let j=0; j<copy.length; j++){
            copy[j].push(arr[i]);
            console.log(copy)
        }
        console.log(res)
        res.concat(copy)
    }
    return res;
}
subset([1,2,3])