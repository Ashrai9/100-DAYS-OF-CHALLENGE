// A message containing letters from A-Z can be encoded into numbers using the following mapping:

// 'A' -> "1"
// 'B' -> "2"
// ...
// 'Z' -> "26"
// To decode an encoded message, all the digits must be mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "111" can have each of its "1"s be mapped into 'A's to make "AAA", or it could be mapped to "11" and "1" ('K' and 'A' respectively) to make "KA". Note that "06" cannot be mapped into 'F' since "6" is different from "06".

// Given a non-empty string num containing only digits, return the number of ways to decode it.

// The answer is guaranteed to fit in a 32-bit integer.
function numdecoding(s) {
    console.log(s)
    if (!s.length || s[0] == 0) return 0
    let r1 = 1, r2 = 1
    for (let i = 1; i < s.length; i++) {
        if (s[i] == 0) r1 = 0
        if (s[i - 1] == 1 || s[i - 1] == 2 && s[i] <= 6) {
            r1 = r1 + r2
            console.log(r1, "inside r1")
            r2 = r1 - r2
            console.log(r2, "inside r2")
        } else {
            r2 = r1
        }
    }
    return r1
}
numdecoding("09")//0
numdecoding("10")//1
numdecoding("226")//3
numdecoding("12")//2
numdecoding("27")//1
numdecoding("2101")//1


// 2>unique Path
// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// How many possible unique paths are there?


var uniquePaths = function (m, n) {
    let dp = new Array(m).fill(1).map(() => new Array(n).fill(1))
    console.log(dp)
    for (let row = 1; row < m; row++) {
        for (let col = 1; col < n; col++) {
            dp[row][col] = dp[row - 1][col] + dp[row][col - 1]
        }
    }
    return dp[m - 1][n - 1]
}
uniquePaths(3, 7)//28
uniquePaths(3, 3)//6



