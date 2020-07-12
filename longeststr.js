var lengthOfLongestSubstring = function(s) {
    let hash = {}
    let biggest = 0;
    for(let i=0; i<s.length; i++){
        if(hash[s[i]]){
            biggest = Math.max(Object.keys(hash).length, biggest);
            i = hash[s[i]]+1
            hash = {};
        }
        else{
            hash[s[i]] = i;
            biggest = Math.max(Object.keys(hash).length, biggest);
        }
    }
    return biggest;
};
console.log(lengthOfLongestSubstring('dvdf'))