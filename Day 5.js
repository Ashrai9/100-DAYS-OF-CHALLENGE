//1>Vedant Hates Consecutive,reemove duplicate string
// and provide only the unique string
//11:5
function vedant(arr) {
    console.log(arr)
    let result1 = []
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
        let y = arr[i].split(" ").sort()
        let x = helper(y)
        result1.push(x)
    }
    return result1
}
function helper(arr1) {
    let count = 0
    for (let j = 0; j < arr1.length - 1; j++) {
        if (arr1[j] === arr1[j + 1]) {
            console.log(arr1[j])
            j++
            continue
        } else {
            count++
        }
    }
    return count
}
vedant(["aman vimal vimal nagar rahul", "amma anna anna amala amala", "and is is list list and"])//3,1,0
// 2>You will be given a function with expression in the form of string as argument.Return true if they re balanced
//16:13

function balanced(arr) {
    console.log(arr)
    let x = 0
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case "[":
                x += 1
                break
            case "]":
                x -= 1
                break
            case "(":
                x += 1
                break
            case ")":
                x -= 1
                break
            case "{":
                x += 1
                break
            case "}":
                x -= 1
                break
        }
    }

    if (x === 0) {
        return true
    } else {
        return false
    }
}
balanced("[()]{}{[()()]()}")// true  
//3>Dictionary order
//You will be given an array of strings and you are asked to sort them lexicographically. Note: the length of the array should not be less than 2.
//16:33, 16:37
function order(...arr) {
    console.log(arr)
    return arr.sort()
}
order("dky", "amit", "sumit", "deepak")