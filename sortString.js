function sortString(str){
    let hash = {};
    for(let i=0; i<str.length; i++){
        hash[str[i]] == undefined ? hash[str[i]] = 1 : hash[str[i]]++;
    }
    
    return hash;
}

console.log(sortString("asdadasdasf"))