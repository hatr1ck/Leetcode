
var fizzBuzz = function(n) {
    for(let i=1; i<=n;i++){
        if(i%5==0 && i%3==0){
            console.log('FIzzBuzz')
        }
        else if(i%3==0){
            console.log('FIzz')
        }
        else if(i%5==0){
            console.log('Buzz')
        }
        else{
            console.log(i.toString())
        }
    }
};
fizzBuzz(1)