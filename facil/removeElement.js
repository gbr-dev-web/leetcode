/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if(nums.length === 0) return 0
    if(isNaN(val)) return 0

    let k = 0

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] !== val){
            nums[k] = nums[i]
            k++
        }
    }

    return k
};

console.log(removeElement([0,1,2,2,3,0,4,2], 2))
