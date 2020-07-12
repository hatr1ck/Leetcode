let rotate =(matrix)=>{
    let len = matrix.length;
    for(let i=0;i<len; i++){
        for(let j=i;j<len; j++){
            let tmp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = tmp;
        }
    }
    console.log(matrix[0])
    console.log(matrix[1])
    console.log(matrix[2])
    for(let i=0;i<len; i++){
        for(let j=0;j<len/2; j++){
            let tmp = matrix[i][j];
            matrix[i][j] = matrix[i][len-1-j];
            matrix[i][len-1-j] = tmp;
        }
    }
    return matrix;
}
rotate([            [1,2,3],
                    [4,5,6],
                    [7,8,9]])