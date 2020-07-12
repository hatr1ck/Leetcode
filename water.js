var maxArea = function(height) {
    let a=0;
    let b=height.length-1;
    let max=0;
    while(a<b){
        if(height[a]<height[b]){
            max=Math.max(max, (b-a)*height[a])
            a++
        }
        else{
            max=Math.max(max, (b-a)*height[b])
            b--
        }
    }
    console.log(max)
};

maxArea([1,8,6,2,5,4,8,3,7])//49