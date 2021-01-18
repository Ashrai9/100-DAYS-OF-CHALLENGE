//1>similar to day 15 problem
function partitionLabels(arr) {
    //console.log(arr)
    let start = 0
    let end = 0
    let result = []
    for (let j = 0; j < arr.length; j++) {
        //console.log(end,"bfr")

        end = Math.max(end, arr.lastIndexOf(arr[j]))
        //console.log(end,"aftr")
        if (j == end) {
            result.push(end - start + 1)
            start = end + 1
            end = 0
        }
    }
    //console.log(result)
    return result
}
partitionLabels("ababcbacadefegdehijhklij")//[9,7,8]

//2>Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.//11:40->12:15

var merge = function (intervals) {
    // if the size is less than 2 return the intervals 
    if (intervals.length < 2) return intervals
    // first we need to sort the intervals by frst value
    intervals = intervals.sort((a, b) => a[0] - b[0])
    const res = [intervals[0]]
    console.log(res)
    for (let i = 1; i < intervals.length; i++) {
        const prev = res[res.length - 1]
        const curr = intervals[i]
        console.log(curr, "curr")

        if (curr[0] <= prev[1]) {
            res.pop()
            console.log(res.pop, "pop")
            res.push([prev[0], Math.max(curr[1], prev[1])])
        } else {
            res.push(curr)
        }
    }
    return res
};
merge([[1, 3], [2, 6], [8, 10], [15, 18]])//[[1,6],[8,10],[15,18]]
//merge([[1,4],[5,6]])//[[1,4],[5,6]]
// 3>Spiral Matrix II, Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.
function spiral(n) {
    let newArr = []
    for (let i = 0; i < n; i++) {
        let sub = []
        for (let j = 0; j < n; j++) {
            sub.push(0)
        }
        newArr.push(sub)
    }
    console.log(newArr)
    // main function
    let top = 0
    let bottom = n - 1
    let left = 0
    let right = n - 1
    let l = 1
    while (l <= (n * n)) {
        for (let i = left; i <= right; i++) {
            newArr[top][i] = l
            l += 1
        }
        top++
        for (let i = top; i <= bottom; i++) {
            newArr[i][right] = l
            l += 1
        }
        right--
        for (let i = right; i >= left; i--) {
            newArr[bottom][i] = l
            l += 1
        }
        bottom--
        for (let i = bottom; i >= top; i--) {
            newArr[i][left] = l
            l += 1
        }
        left++
    }
    return newArr
}
spiral(3)//[[1,2,3],[8,9,4],[7,6,5]]

  // 1 2 3 
  // 8 9 4
  // 7 6 5