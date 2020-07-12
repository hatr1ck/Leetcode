var productExceptSelf = function(nums) {
    let res = 1;
    let arr = [];
    for(let i=0; i<nums.length; i++){
        res*=nums[i]
    }
    for(let i=0; i<nums.length; i++){
        arr.push(res/nums[i])
    }
    return arr;
};
console.log(productExceptSelf([1,2,3,4]))