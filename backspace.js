
var backspaceCompare = function(S, T) {
    let iterate = (s)=>{
        for(let i=0; i<s.length;i++){
            if(s[i]=="#"){
                console.log(s.slice(0,i-1)+s.slice(i+1,s.length))
                return iterate(s.slice(0,i-1)+s.slice(i+1,s.length))
            }
            if(s.length==i+1){
                return s;
            }
        }
    }
    console.log(iterate(T))
    return iterate(S) == iterate(T)
};
console.log(backspaceCompare("a##c","#a#c"))