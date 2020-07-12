var commonChars = function(A) {
    let arr = [];
    for(let i=0; i<A[0].length; i++){
        let gotone = 0;
         for(let j=1; j<A.length; j++){
             if(A[j].indexOf(A[0][i])>-1){
                 gotone++
                A[j] = A[j].replace(A[0][i], "")
             }
             if(gotone == A.length - 1){
                 arr.push(A[0][i])
             }
         }
    }
    return arr;
 };
console.log(commonChars(["cool","lock","cook"]))