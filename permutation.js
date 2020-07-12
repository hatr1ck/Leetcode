var nextPermutation = function(nums) {
    for(let i=nums.length-1; i>0;i--){
        if(nums[i]>nums[i-1]){
            for(let j=nums.length-1; j>0;j--){
                if(nums[j]>nums[i-1]){
                    let save = nums[i-1];
                    nums[i-1]=nums[j];
                    nums[j]=save;
                    return nums.concat(nums.splice(i,nums.length).reverse())
                }
            }
        }
    }
    return nums.reverse()
};

console.log(nextPermutation([6,2,1,5,4,3,0]))