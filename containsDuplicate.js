// var containsDuplicate = function(nums) {
//     let ass = new Set(nums);
//     return ass.size !== nums.length;
// };
var containsDuplicate = function(nums) {
    let hash={}
    for(let i=0;i<nums.length;i++){
        if(hash[nums[i]]){
            return true
        }
        else{
            hash[nums[i]]=1;
        }
    }
    return false
};
console.log(containsDuplicate([1,2,3,1]))