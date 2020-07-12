var twoSum = function(nums, target) {
    var hash = new Map();
    for(var i = 0; i<nums.length; i++){
        var c = target - nums[i]
        if(hash.has(c))return [hash.get(c), i]
        hash.set(nums[i], i)
    }
};
console.log(twoSum([2,7,11,15], 9))