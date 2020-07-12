let arr = [];
function happy(n){
    let str = n.toString();
    let sum = 0;
    for(let i =0; i<str.length; i++){
        sum+=Math.pow(str[i], 2)
    }
    if(sum == 1){
        console.log(sum)
        return true;
    }
    if(arr.includes(sum)){
        return false;
    }
    arr.push(sum)
    return happy(sum)
}
happy(13)