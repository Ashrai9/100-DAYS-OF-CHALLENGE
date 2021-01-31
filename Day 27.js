// 1>Given an integer array nums of unique elements, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.
var subsets = function (nums) {
    let res = [[]]
    for (let i = 0; i < nums.length; ++i) {
        let length = res.length;

        for (let j = 0; j < length; ++j) {
            res.push([...res[j], nums[i]])

        }
    }
    return res
};
subsets([1, 2, 3])//[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// 2>>Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

function subsetsWithDup(arr) {
    arr = arr.sort((a, b) => a - b)
    let result = [[]]
    for (let i = 0; i < arr.length; i++) {
        let m = result.length
        for (let j = 0; j < m; j++) {
            let x = [...result[j], arr[i]]
            result.push(x)
        }
    }

    return [...new Set(result.map(JSON.stringify))].map(JSON.parse)
}

subsetsWithDup([1, 2, 2])//[[],[1],[1,2],[1,2,2],[2],[2,2]]