let nonRepeat = (str)=>{
    for(i=0; i<str.length; i++){
        if(str.split('').reduce((acc, ch) => ch === str[i] ? acc + 1: acc, 0) == 1){
            return str[i];
        }
    }
    return "_"
}
console.log(nonRepeat('aaabb'))