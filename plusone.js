var plusOne = function(arr) {
    let next = false;
    for(let i = arr.length-1; i>=0; i--){
        if(arr[i] == 9){
            next = true;
            arr[i] = 0
            if(arr.length == 1){
                arr.unshift(1)
            }
        }
        else{
            arr[i]++;
            break;
        }
    }
    return arr
};

console.log(plusOne([9]))