1 > Backspace String Compare
Given two strings S and T, return if they are equal when both are typed into empty text editors.# means a backspace character.

Note that after backspacing an empty text, the text will continue empty.
function backspaceCompare(s, t) {
    let x = check(s)
    let y = check(t)
    // console.log(x)
    // console.log(y)
    return x == y ? true : false
}
function check(arr) {
    let x = []
    arr = arr.split("")
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "#") {
            x.pop()
        } else {
            x.push(arr[i])
        }
    }
    let r = x.join("").toString()
    return r
}
//backspaceCompare("ab#c","ad#c")// true -> ac ac
backspaceCompare("ab##", "c#d#")//true
backspaceCompare("a#c", "b")//false

2 > Assign cookies
Assume you are an awesome parent and want to give your children some cookies.But, you should give each child at most one cookie.

Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with; and each cookie j has a size s[j].If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content.Your goal is to maximize the number of your content children and output the maximum number.

function findContentChildren(s, t) {
    console.log(s, t)
    s = s.sort((a, b) => a - b)
    t = t.sort((a, b) => a - b)
    let count = 0
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < t.length; j++) {
            if (s[i] <= t[j]) {
                //t[j]=""
                count++
                break
            }
        }
    }
    return count
}
findContentChildren([1, 2, 3], [1, 1])//1
findContentChildren([1, 2], [1, 2, 3])//2

other Way:
var findContentChildren = function (g, s) {
    g = g.sort((a, b) => a - b)
    s = s.sort((a, b) => a - b)

    let i = 0
    let count = 0;
    let j = 0
    while (i < s.length) {
        if (s[i] >= g[j]) {
            count++
            j++
        }
        i++
    }

    return count
};

3 > 2D array hackerrank
function check(arr) {
    let max = 0
    let x
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            x = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]
            max = Math.max(max, x)
        }
    }
    return max
}

check([[1, 1, 1, 0, 0, 0], [0, 1, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0],
[0, 0, 2, 4, 4, 0], [0, 0, 0, 2, 0, 0], [0, 0, 1, 2, 4, 0]])

      // 1 1 1 0 0 0
      // 0 1 0 0 0 0
      // 1 1 1 0 0 0
      // 0 0 2 4 4 0
      // 0 0 0 2 0 0
      // 0 0 1 2 4 0