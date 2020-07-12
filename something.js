var lengthOfLastWord = function(s) {
    var count = 0;
    s=s.trim()
    for(let i=s.length-1;i>=0;i--){
        if(s[i] !== " "){
            count++
        }
        else{
            return count;
        }
    }
    return count
};


console.log(lengthOfLastWord("a "))