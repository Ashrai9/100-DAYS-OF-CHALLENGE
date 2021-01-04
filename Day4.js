//1>Zeros are heros- avg 20 min, 18-14-> 18:26->12
//find the number of Zeros
function zeros(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i][j] == 0) {
                count++
            }
        }
    }
    return count
}
zeros([[0, 0, 1], [0, 1, 1], [1, 1, 1]]) //Answer 3
//2>  stacks->Reverse String 18:32
function reverseStr(arr) {
    let result1 = arr.split("").reverse().join("")
    return result1
}
reverseStr("abcde")// edcba
//3> Given an expression in its infix form, convert it into postfix form.
function infiTopostfi(arr) {
    console.log(arr)
    let result1 = ""
    let x = arr.split("")
    for (let i = 0; i < x.length; i++) {
        console.log(x)

        if ((x[i] == "^" || x[i] == "-") && (i < arr.length - 1)) {
            let temp = x[i]
            //console.log(temp)
            x[i] = x[i + 1]
            console.log(x[i], i)
            x[i + 1] = temp
            result1 += x[i]
            i++
            //console.log(x[i+1])
        }

        result1 += x[i]
    }
    return result1
}
infiTopostfi("c^d-e")//expected cd^e-
    //01234