//1>Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
function nums(arr) {
    console.log(arr)
    let index = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            arr[index++] = arr[i]
        }
    }
    for (let i = index; i < arr.length; i++) {
        arr[i] = 0
    }
    console.log(arr)
}
nums([0, 1, 0, 3, 12])//[1,3,12,0,0]
//     //2>Remove Element . Given an array nums and a value val, remove all instances of that value in-place and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// The order of elements can be changed. It doesn't matter what you leave beyond the new length.
function removeElement(nums, val) {
    let index = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[index++] = nums[i]
        }
    }
    return index
}
// removeElement([0,1,2,2,3,0,4,2],2)//5 i.e[0,1,4,0,3]
removeElement([3, 2, 2, 3], 3)//[2,2]