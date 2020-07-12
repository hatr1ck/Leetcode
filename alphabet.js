function alphabetPosition(text) {
    let answer = ""
    let alpha =  ['lul', "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    for(let i in text){
        if(alpha.indexOf(text[i].toLowerCase())==-1){
        }
        else{
            answer += ` ${alpha.indexOf(text[i].toLowerCase())}`
        }
    }
        console.log(answer)
}

alphabetPosition("The sunset sets at twelve o' clock.")