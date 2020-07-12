var subarraySum = function(nums, k) {
    let count = 0;
    let sum = 0;
    let map = new Map();
    map.set(0,1);
    if(nums.length==0) return 0;
    for(let i=0; i<nums.length; i++){
        sum+=nums[i]
        if (map.has(sum-k)) count += map.get(sum-k);
        if (map.has(sum)) map.set(sum, map.get(sum)+1);
        else map.set(sum, 1);
    }
    return count;
}
console.log(subarraySum([1,1,1], 2))