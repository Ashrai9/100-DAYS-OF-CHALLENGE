1//cavity map
function cavityMap(grid) {
    for (let i = 1; i < grid.length - 1; i++) {
        let x = grid[i].split("")
        //console.log(x,"x")
        for (let j = 1; j < x.length - 1; j++) {
            //console.log(x[j],"j")
            if ((x[j] > x[j - 1] && x[j] > x[j + 1]) && (grid[i - 1][j] < x[j]) & grid[i + 1][j] < x[j]) {
                x[j] = "X"
            }
        }
        grid[i] = x.join("")
    }

    return grid
}

cavityMap(['1112', '1912', '1892', '1234'])
// 1112
// 1X12
// 18X2
// 1234

2// running time
function runningTime(arr) {
    let count = 0
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j >= 0; j--) {
            if (arr[j] < arr[j - 1]) {
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
                count++
            }
        }
        console.log(arr, "arr")
    }
    return count
}
runningTime([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])//45
3//comparison sorting
function countingSort(arr) {
    //let max=Math.max(...arr)
    //console.log(max,"max")
    let x = new Array(100).fill(0)
    for (let i = 0; i < arr.length; i++) {
        x[arr[i]] += 1
    }
    return x
}

countingSort([1, 1, 3, 2, 1])//[0,3,1,1]
//4)counting sort 2

function countingSort(arr) {
    let x = new Array(100).fill(0)
    for (let i = 0; i < arr.length; i++) {
        x[arr[i]] += 1
    }
    let j = 0
    for (let i = 0; i < x.length; i++) {
        let k = 0
        while (k < x[i]) {
            arr[j] = i
            j++
            k++
        }
    }
    return arr
}
5//subarray division
function birthday(s, d, m) {
    let count = 0
    for (let i = 0; i < s.length; i++) {
        let k = 0
        let x = 0
        while (k < m) {
            x += s[i + k]
            if ((k == m - 1) && (x == d)) {
                count++
            }
            k++
        }
    }
    return count
}
birthday([1, 2, 1, 3, 2], 3, 2)//2