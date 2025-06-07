/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const index = nums.indexOf(target)
    if(index !== -1) return index

    nums.push(target)
    nums.sort((a, b) => a - b)
    return nums.indexOf(target)
};

console.log(searchInsert([1,3,5,6], 7))