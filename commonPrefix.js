var longestCommonPrefix = function(arr) {
    let same = "";
    let len = arr.length;
    if(len==0){
        return same;
    }
    for(let i=0; i<arr[0].length; i++){
        let count = 0;
        for(let j=0; j<len; j++){
            if(arr[0][i]==arr[j][i]){
                count++;
            }
            else{
                return same;
            }
            if(count == len){
                same+=arr[0][i]
            }
        }
    }
    return same;
};
console.log(longestCommonPrefix(["flower","flow","flight"]))