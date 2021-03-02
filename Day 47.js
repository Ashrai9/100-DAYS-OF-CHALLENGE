function getMinimumCost(k, c) {
    // console.log(k,c)
    let x = c.slice(c.length - k).reduce((a, b) => a + b, 0)
    let y = c.slice(0, c.length - k).reduce((a, b) => a + (2 * b), 0)
    return x + y

}
getMinimumCost(3, [1, 3, 5, 7, 9])//29

//degenrate triangle=>sort in asc=> a+b>c
function maximumPerimeterTriangle(sticks) {
    let max = 0
    let maxArr
    let flag = false
    sticks.sort((a, b) => a - b)
    for (let i = 0; i < sticks.length - 2; i++) {
        if (sticks[i] + sticks[i + 1] > sticks[i + 2]) {
            let x = sticks[i] + sticks[i + 1] + sticks[i + 2]
            if (max < x) {
                max = x
                maxArr = [sticks[i], sticks[i + 1], sticks[i + 2]]
                flag = true
            }
        }
    }
    return flag == true ? maxArr : [-1]
}

//maximumPerimeterTriangle([1,1,1,3,3])//[1,3,3]
maximumPerimeterTriangle([1, 2, 3])//-1

2//luck balance
function luckBalance(k, contests) {
    let sum = (x, y) => x + y;
    let important_contests = contests.filter(x => x[1] === 1).map(x => x[0]).sort((x, y) => x - y);//[1,2,5,8]

    let not_important_contests = contests.filter(x => x[1] === 0).map(x => x[0]).reduce(sum, 0);[15]

    let count = not_important_contests;//15

    if (important_contests.length > k) { //important_contests=4 ,k>3
        let i = important_contests.length - k;//1
        while (i--) {
            count -= important_contests.shift();//-1
        }
    }
    count += important_contests.reduce(sum, 0)
    return count;
}
luckBalance(3, [[5, 1], [2, 1], [1, 1], [8, 1], [10, 0], [5, 0]])//29

3//   priyanka and toys
function toys(w) {
    console.log(w)
    w.sort((a, b) => a - b)
    let count = 1
    let x = w[0] + 4
    for (let i = 0; i < w.length; i++) {
        if (w[i] > x) {
            x = w[i] + 4
            count++
        }
    }
    return count
}
toys([1, 2, 3, 21, 7, 12, 14, 21])//4

4// max min
function maxMin(k, arr) {
    arr.sort((a, b) => a - b)
    let x
    let minimum = 10000000000000
    for (let i = 0; i < arr.length - k; i++) {
        x = arr[i + k - 1] - arr[i]
        minimum = Math.min(minimum, x)

    }
    return minimum
}
maxMin(4, [1, 2, 3, 4, 10, 20, 30, 40, 100, 200])//3
        // //maxMin(3,[ 10, 100, 300, 200, 1000, 20, 30 ])//20