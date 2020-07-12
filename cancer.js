var search = function (nums, target) {
    const minIndex = findMinimum(nums)
    if (nums[minIndex] === target) return minIndex;
    if (target > nums[minIndex] && target > nums[nums.length - 1]) { //if greater than than the mid and last
      let index = binarySearch(0, minIndex, nums, target) //search the first half of the array
      if (index !== -1) return index
    } else {
      let index = binarySearch(minIndex, nums.length, nums, target) //search the remainder of the array
      return index;
    }
    return -1
  };
  
  function findMinimum(arr) {
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
      const mid = Math.floor((r + l) / 2)
      if (arr[mid] > arr[r]) {
        l = mid + 1
      } else {
        r = mid
      }
    }
    return l
  }
  
  function binarySearch(l, r, arr, target) {
    while (l <= r) {
      const mid = Math.floor((r + l) / 2)
      if (arr[mid] === target) {
        return mid
      } else if (arr[mid] > target) {
        r = mid - 1
      } else {
        l = mid + 1
      }
    }
    return -1
  }
console.log(search([4,5,6,7,8,9,0,1,2], 2))