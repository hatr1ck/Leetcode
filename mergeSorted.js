var merge = function(nums1, m, nums2, n) {
    for(let i=m; i<nums1.length; i++){
        nums1[i] = nums2[i-n]
    }
    return nums1.sort((a,b)=>a-b);
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))

// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]