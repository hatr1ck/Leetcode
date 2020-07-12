var maxSubArray = function(nums) {
    let sum = nums[0];
    let current = nums[0];
    for(let i=1; i<nums.length; i++){
        current=Math.max(nums[i], current+nums[i])    
        sum=Math.max(sum,current)
    }
    return sum
};

console.log(maxSubArray([1,2]))