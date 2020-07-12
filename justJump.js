const canJump = (nums) => {
    if(nums.length === 1) return true;
    if(nums[0] === 0) return false;                                                                                                                         
   
    let foundZero = false;
    let counter = 0;
    for(let i = nums.length - 2; i >= 0; i--) {
        const numZero = nums[i] === 0;

        if(!numZero && foundZero && nums[i] >= counter) foundZero = false;

        if(foundZero) counter += 1;
        
        if(numZero && !foundZero) {
            counter = 2;
            foundZero = true;
        }
    }
    
    return !foundZero;
};

console.log(canJump([2,3,1,1,4]))