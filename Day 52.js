//Big sorting.

function bigSorting(unsorted) {
    return unsorted.sort((a, b) => {
        if (a.length == b.length) {
            return a > b ? 1 : -1
        }
        return a.length - b.length
    })
}

bigSorting([31212121121212121121212, 1, 4, 2])
//[[1,2,4,31212121121212121121212]]

//2>encryption
function encryption(s) {
    //remove space and get slength
    let arr = s.split(" ").join("")
    let n = arr.length
    //console.log(arr,"arr",n,"n")
    //set row and column based on the input
    let condition = Math.sqrt(n)
    let row = Math.floor(condition)
    let col = Math.ceil(condition)
    if (row * col < n) {
        row = col
    }
    //console.log(row,"r",col,"c")
    // represent arr in coloumn wise and separete the result with the space
    arr.split("")
    let x = ""
    for (let i = 0; i < col; i++) {
        for (let j = i; j < arr.length; j += col) {
            x += arr[j]
        }
        if (i != col - 1) x += " "

    }
    //console.log(x,"x")
    return x
}
encryption(["haveaniceday"])//"hae and via ecy"

//3// anagram
function anagram(s) {
    s.split("")
    if (s.length % 2 != 0) return -1
    let n = s.length
    let first = s.slice(0, n / 2).split("")
    let second = s.slice(n / 2).split("")
    console.log(first, second)
    let count = 0
    for (let i = 0; i < first.length; i++) {
        let flag = false
        for (let j = 0; j < second.length; j++) {
            if (first[i] == second[j]) {
                second[j] = "no"
                flag = true
                break
            }
        }
        if (flag == false) count++
    }
    return count
}
anagram("aaabbb")//0
anagram("abc")//-1
