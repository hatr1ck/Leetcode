function foo(arr){
    let left = 0;
    let right = arr.length - 1;
    let ans = [];
    for(let i=0; i<arr.length; i++){
        if(arr[left]*arr[left] > arr[right] * arr[right]){
            ans.unshift(arr[left]*arr[left])
            left++
        }
        else{
            ans.unshift(arr[right]*arr[right])
            right--
        }
    }
    return ans
}
console.log(foo([-5,-4,-2,1,3,5]))
console.log('assasssassss')