// 1>Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

function minimumPath(arr) {
    let m = arr.length
    let n = arr[0].length
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i == 0 && j == 0) {
                continue
            } else if (i == 0) {
                arr[i][j] += arr[i][j - 1]
            } else if (j == 0) {
                arr[i][j] += arr[i - 1][j]
            } else {
                arr[i][j] += Math.min(arr[i][j - 1], arr[i - 1][j])
            }

        }
    }
    return arr[m - 1][n - 1]
}
minimumPath([[1, 3, 1], [1, 5, 1], [4, 2, 1]])//7
minimumPath([[1, 2, 3], [4, 5, 6]])//12

// 2>.A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// Now consider if some obstacles are added to the grids. How many unique paths would there be?

// An obstacle and space is marked as 1 and 0 respectively in the grid.
function uniquePathsWithObstacles(arr) {
    let m = arr.length
    let n = arr[0].length
    // if obstacles found in the 0,0 positio return 0
    if (arr[0][0] == 1) return 0
    arr[0][0] = 1
    // set the coloumn
    for (let i = 1; i < m; i++) {
        arr[i][0] = (arr[i][0] == 0 && arr[i - 1][0] == 1) ? 1 : 0
    }
    // set the row
    for (let j = 1; j < n; j++) {
        arr[0][j] = (arr[0][j] == 0 && arr[0][j - 1] == 1) ? 1 : 0
    }
    //apart from boundries
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (arr[i][j] != 1) {
                arr[i][j] = arr[i - 1][j] + arr[i][j - 1]
            } else {
                arr[i][j] = 0
            }
        }
    }
    return arr[m - 1][n - 1]
}
uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]])
//2
uniquePathsWithObstacles([[0, 1], [0, 0]])//1
uniquePathsWithObstacles([[1, 0]])//0