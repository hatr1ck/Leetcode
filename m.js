var merge = function(arr) {
    arr.sort((a, b) => a[0] === b [0] ? a[1] - b[1] : a[0] - b[0])
    let res = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i+1]){
            if(arr[i][1] >= arr[i+1][0]){
                arr[i][0] > arr[i+1][0] ? res.push([arr[i+1][0], arr[i+1][1]]) : res.push([arr[i][0], arr[i+1][1]])
                i++
            }
            else{
                res.push(arr[i])
            }
        }
            else{
                res.push(arr[i])
            }
    }
    return res;
};

console.log(merge([[1,4],[0,4]])) // [[1,6],[8,10],[15,18]]