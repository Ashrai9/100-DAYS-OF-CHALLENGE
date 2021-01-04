//7--> 11:35- 11:44-14 min
//25 26 7 8 10 11 79
// find third largest element
function largestNumber(arr) {
    let newArr = arr.split(" ").sort((a, b) => b - a)
    return newArr[2]
}
largestNumber("25 26 7 10 11 79")// result 25

//Find Biggest Difference-- not more than 30 min
//11:46--11:56- 10min
//29 79 72 81 9 7 21
function biggestDiff(arr) {
    let x = arr.split(" ").sort((a, b) => b - a)
    let diff = x.slice(0, 1) - x.slice(-1)
    console.log(diff)
}

biggestDiff("29 79 72 81 9 7 21")
//3> 2D 11:57->12:14->7 min
//Given a 2D array, print the even numbers of it.
function evenNumber(...newarr) {// passing out all the arguments using ...args
    //let arr=(...newarr)
    console.log(newarr)
    let result1 = []
    for (let i = 0; i < newarr.length; i++) {
        for (let j = 0; j < newarr.length; j++) {
            let x = newarr[i][j]
            if (x % 2 == 0) {
                result1.push(x)
            }
        }
    }
    console.log(result1)
}
evenNumber([1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16])// result[2,4,6,8,10,12,14,16]

//4>//14:40 - 14:53->13 min, max 22min(-6 min on question)
//Addition In matrix
//sum of all the elements in 2d matrix
function sum(arr) {
    console.log(arr)
    let x = 0
    for (let i = 0; i < arr.length; i++) {
        x += arr[i].split(" ").map(y => Number(y)).reduce((a, c) => a + c, 0)
    }
    return x
}
sum(["1 2 3 4", "5 6 7 8", "9 10 11 12", "13 14 15 16"])