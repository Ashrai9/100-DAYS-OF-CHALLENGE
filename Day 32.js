1 > floof Fill
An image is represented by a 2 - D array of integers, each integer representing the pixel value of the image(from 0 to 65535).

Given a coordinate(sr, sc) representing the starting pixel(row and column) of the flood fill, and a pixel value newColor, "flood fill" the image.

To perform a "flood fill", consider the starting pixel, plus any pixels connected 4 - directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4 - directionally to those pixels(also with the same color as the starting pixel), and so on.Replace the color of all of the aforementioned pixels with the newColor.
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
    let current = image[sr][sc]
    //console.log(current,)
    helper(image, current, sr, sc, newColor)
    return image
}

function helper(image, current, sr, sc, newColor) {
    //console.log(sr,"sr",sc,"sc")
    if (current === newColor) return

    if (sr < 0 || sc < 0 || sr >= image.length || sc >= image[0].length || (image[sr][sc] !== current)) return

    image[sr][sc] = newColor

    helper(image, current, sr + 1, sc, newColor)
    helper(image, current, sr - 1, sc, newColor)
    helper(image, current, sr, sc + 1, newColor)
    helper(image, current, sr, sc - 1, newColor)
}

2 >> island perimeter
You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

Grid cells are connected horizontally / vertically(not diagonally).The grid is completely surrounded by water, and there is exactly one island(i.e., one or more connected land cells).

The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island.One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

// island perimeter// 15:08
function check(arr) {
    let m = arr.length
    let n = arr[0].length
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            // console.log(arr[i][j],"arr")
            if (arr[i][j] == 1) {
                if (i - 1 < 0 || arr[i - 1][j] == 0) {
                    total += 1
                }
                if (i + 1 >= m || arr[i + 1][j] == 0) {
                    total += 1
                }
                if (j - 1 < 0 || arr[i][j - 1] == 0) {
                    total += 1
                }
                if (j + 1 >= n || arr[i][j + 1] == 0) {
                    total += 1
                }
            }

        }
        //console.log("total",total)
    }
    return total
}
check([[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]])//16