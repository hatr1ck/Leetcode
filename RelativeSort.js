var relativeSortArray = function(arr1, arr2){
    arr1 = arr1.sort((a,b)=> a-b)
    for(let i=arr2.length-1; i>=0; i--){
        for(let j=0; j<arr1.length; j++){
            if(arr1[j] == arr2[i]){
                let numb = arr1.splice(j,1);
                arr1.unshift(numb[0])
            }
        }
    }
    return arr1;
};
console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19],[2,1,4,3,9,6])) //[2,2,2,1,4,3,3,9,6,7,19]