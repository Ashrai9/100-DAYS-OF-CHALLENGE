1// Buddy string
Given two strings A and B of lowercase letters, return true if you can swap two letters in A so the result is equal to B, otherwise, return false.

Swapping letters is defined as taking two indices i and j(0 - indexed) such that i != j and swapping the characters at A[i] and A[j].For example, swapping at indices 0 and 2 in "abcd" results in "cbad".


function bodyString(a, b) {
    if (a == "" || b == "" || a.length != b.length) return false
    if (a === b) {
        let set = new Set(a)
        return set.size != a.length
    }
    let x = ""
    let y = ""
    for (let i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {
            x += a[i]
            y += b[i]
        }
    }

    if (x.length == 2 && x.length == y.length) {
        return x[0] == y[1] && x[1] == y[0]
    }
    return false
}
//bodyString("aaaaaaabc","aaaaaaacb")//true
bodyString("ab", "ba")//true
//bodyString("aa","aa")//true
//bodyString("","aa")//false
//bodyString("ab","ab")//false
//bodyString("abcaa","abcbb")//false
//bodyString("abab","abab")//true

2 > Given an m x n matrix, return true if the matrix is Toeplitz.Otherwise, return false.

A matrix is Toeplitz if every diagonal from top - left to bottom - right has the same elements.

function isToeplitzMatrix(arr) {

    if (arr[0].length == 1 || arr.length == 1) return true
    for (let i = 1; i < arr.length; i++) {
        for (let j = 1; j < arr[0].length; j++) {
            if ((i - 1 >= 0 && j - 1 >= 0) && (arr[i][j] !== arr[i - 1][j - 1])) {
                return false
            }
        }
    }
    return true
}
isToeplitzMatrix([[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 2]])// true
//isToeplitzMatrix([[1,2],[2,2]])//false
//isToeplitzMatrix([[57,54],[84,57]])//true
//isToeplitzMatrix([[1,2],[2,2]])//false

3 > monotonic array
An array is monotonic if it is either monotone increasing or monotone decreasing.

An array A is monotone increasing if for all i <= j, A[i] <= A[j].An array A is monotone decreasing if for all i <= j, A[i] >= A[j].

Return true if and only if the given array A is monotonic.

function isMonotonic(arr) {
    let arr1 = [...arr]
    let arr2 = [...arr]
    //let flag=true
    arr1 = arr1.sort((a, b) => a - b)
    arr2 = arr2.sort((a, b) => b - a)
    //console.log(arr1,arr2,arr)
    let x = check(arr1, arr)
    let y = check(arr2, arr)
    //console.log(x,y)
    return x || y ? true : false
}

function check(a, b) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {
            return 0
        }
    }
    return 1
}
//isMonotonic([1,2,2,3])//true
//isMonotonic([6,5,4,4])//true
//isMonotonic([1,3,2])//false
isMonotonic([1, 3, 2])//false


// simple solution 
function isMonotonic(arr) {
    let increasing = true
    let decreasing = true

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            increasing = false
        } else if (arr[i] < arr[i + 1]) {
            decreasing = false
        }
    }
    return decreasing || increasing ? true : false
}
    //isMonotonic([1,2,2,3])//true