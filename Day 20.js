//1>Given an integer n, return any array containing n unique integers such that they add up to 0.

function sumZero(n) {
    //console.log(n)
    if (n == 1) {
        return [0]
    }
    let result = []
    let sum = 0
    for (let i = 0; i < n - 1; i++) {
        result.push(i)
        sum += i
    }

    result.unshift(-sum)
    //console.log(result)
    return result
}
//sumZero(5)//[-6,0,1,2,3]
sumZero(1)//[0]
// 2>Alice and Bob have candy bars of different sizes: A[i] is the size of the i-th bar of candy that Alice has, and B[j] is the size of the j-th bar of candy that Bob has.

// Since they are friends, they would like to exchange one candy bar each so that after the exchange, they both have the same total amount of candy.  (The total amount of candy a person has is the sum of the sizes of candy bars they have.)

// Return an integer array ans where ans[0] is the size of the candy bar that Alice must exchange, and ans[1] is the size of the candy bar that Bob must exchange.

// If there are multiple answers, you may return any one of them.  It is guaranteed an answer exists.
//*
function swap(arr1, arr2) {
    let x = arr1.reduce((a, c) => a + c, 0)//->8
    let y = arr2.reduce((a, c) => a + c, 0)//->6
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (x - arr1[i] + arr2[j] == y - arr2[j] + arr1[i]) {
                console.log(arr1[i], arr2[j])
            }
        }
    }
}

swap([1, 2, 5], [2, 4])//[5,4]
//3>function island(grid){
let island = 0
for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] == 1) {
            console.log(i, j)
            grids(grid, i, j)
            island += 1
        }
    }
}
return island
}
function grids(grid, i, j) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] == 0 || grid[i][j] == 2) {
        return 0
    }
    grid[i][j] = 2
    grids(grid, i - 1, j)
    grids(grid, i + 1, j)
    grids(grid, i, j - 1)
    grids(grid, i, j + 1)
    return 1
}
//island([[1,1,0],[1,0,0]])//1
island([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
])//3
