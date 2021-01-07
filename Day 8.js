//1> generate square matrix
//Given an integer n, generate a square matrix filled with elements from 1 to n^2 in spiral order.

function squareMatrix(n) {
    console.log(n)
    // 1 to Math.pow(3,2)
    let lists = []
    let y = 0
    let k = Math.pow(n, 2) / 3
    console.log(k)
    for (let i = 0; i < k; i++) {
        let sub = []
        for (let j = 0; j < k; j++) {
            y += 1
            sub.push(y)
        }
        lists.push(sub)
    }
    console.log(lists)
}
squareMatrix(3)// 123 456 789 in 3x3 matrix form
//2>2D Array - Rotate Matrix by 90 Degree 17:30->17:43->13

function rotate(arr) {
    let result1 = []
    for (let j = 0; j < arr.length; j++) {
        let sub = []
        for (let i = arr.length - 1; i >= 0; i--) {
            sub.push(arr[i][j])
        }
        result1.push(sub)
    }
    console.log(result1)
}
rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
    // expected[[7,4,1],[8,5,2],[9,6,3]]

