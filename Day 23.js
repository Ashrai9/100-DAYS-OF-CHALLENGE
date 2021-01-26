// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

function uniqueLetter(arr) {
    if (arr == "") {
        return -1
    }
    let obj = {}
    for (let i in arr) {
        let x = arr[i]
        if (obj[x]) {
            obj[x] += 1
        } else {
            obj[x] = 1
        }
    }
    let y = Object.entries(obj).sort((a, b) => a[1] - b[1])
    if (y[0][1] == 1) {
        let z = arr.indexOf(y[0][0])
        return z
    } else {
        return -1
    }

}
//uniqueLetter("leetcode")//0
//uniqueLetter("loveleetcode")//2
uniqueLetter("aadadaad")//-1