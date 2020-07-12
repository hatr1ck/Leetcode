var removeDuplicates = function(nums) {
    for(let i=1; i<nums.length-1; i++){
        if(nums[i-1]==nums[i+1]){
            nums.splice(i,1)
            i--
        }
    }
    return nums;
};
console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]))