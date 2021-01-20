//1> You are given an integer array nums sorted in ascending order (not necessarily distinct values), and an integer target.

// Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,4,4,5,6,6,7] might become [4,5,6,6,7,0,1,2,4,4]).

// If target is found in the array return its index, otherwise, return -1.

var search = function (nums, target) {
    let x = nums.indexOf(target)
    if (x == -1) {
        return false
    } else {
        return true
    }
};
search([2, 5, 6, 0, 0, 1, 2], 0)//true
2 > Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters.No two characters may map to the same character, but a character may map to itself.

function main(s, n) {
    let y = isomorphic(s, n)
    let z = isomorphic(n, s)
    if (y === z && y == true) {
        return true
    } else {
        return false
    }
}
function isomorphic(s, n) {
    //console.log(s,n)
    let x = []

    for (let i = 0; i < s.length; i++) {
        x.push([s[i], n[i]])
    }
    //console.log(x,"ch")
    x = x.sort()
    console.log(x)
    for (let i = 1; i < x.length; i++) {
        if (x[i][0] == x[i - 1][0]) {
            if (x[i][1] != x[i - 1][1]) {
                return false
            }
        }
    }
    return true
}
//isomorphic("egg","add")//true
//main("foo","bar")//false
main("badc", "baba")//false