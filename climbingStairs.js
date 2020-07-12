var climbStairs = function(n) {
    let p1 = 1;
    let p2 = 1;
    let p3;
    for(let i=0; i<n; i++){
        p3=p1+p2;
        p2=p1;
        p1=p3;
    }
    console.log(p1,p2,p3)
    return p2;
};

console.log(climbStairs(5))