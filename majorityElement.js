var majorityElement = function(nums) {
    let map = {};
    for(let i=0; i<nums.length; i++){
        map[nums[i]] ? map[nums[i]]++ : map[nums[i]]=1;
    }
    let value = Math.max(...Object.values(map));
    for(obj of Object.keys(map)){
        if(map[obj] == value) {
            return obj
    }
    }
};
console.log(majorityElement([2,2,1,1,1,2,2]))