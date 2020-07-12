var findOcurrences = function(text, first, second) {
    text = text.split(" ")
    let arr = [];
    for(let i=0; i<text.length; i++){
        if(text[i] == first && text[i+1] == second){
            console.log(text[i], text[i+1])
            arr.push(text[i+2])
        }
    }
    console.log(arr)
    return arr;
};
findOcurrences()