var generate = function(numRows) {
    let result = [];
   for(let i=1; i<=numRows;i++){
        let arr2 = []
        if(result.length>1){
            let last = result[result.length-1];
            for(let i=0; i<last.length;i++){
                if(last[i-1]){
                    arr2.push(last[i-1]+last[i])
                }
            }
        }
        if(result.length>0){
            
            arr2.unshift(1)
        }
        arr2.push(1)
        result.push(arr2)
   }
   return result;
};
console.log(generate(5))

// [
//     [1],
//    [1,1],
//   [1,2,1],
//  [1,3,3,1],
// [1,4,6,4,1]
// ]
// let arr = [1,3,3,1] // 1,3,3,1
// let arr2 = []
// for(let i=0; i<arr.length;i++){
//     if(arr[i-1]){
//         arr2.push(arr[i-1]+arr[i])
//     }
// }
// arr2.push(1)
// arr2.unshift(1)
// console.log(arr,arr2)