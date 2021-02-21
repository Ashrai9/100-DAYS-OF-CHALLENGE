1 > Grading problem - easy
function gradingStudents(grades) {
    // Write your code here
    let arr = []
    let k = 1
    let n = 0
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] < 38) {
            arr.push(grades[i])
        } else if (grades[i] > 37 && grades[i] % 5 != 0) {
            n = grades[i]
            while (k < 3) {
                if ((grades[i] + k) % 5 == 0) {
                    n = grades[i] + k
                    break
                }
                k++
            }
            k = 1
            arr.push(n)
        } else {
            arr.push(grades[i])
        }

    }
    return arr
}
gradingStudents([73, 67, 38, 33])//[75,67,40,33]

2 > equalizeArray

function equalizeArray(arr) {
    let obj = {}
    for (let x of arr) {
        if (obj[x]) {
            obj[x] += 1
        } else {
            obj[x] = 1
        }
    }
    let y = Object.entries(obj).sort((a, b) => b[1] - a[1])
    return arr.length - y[0][1]
    //console.log(y)
}
equalizeArray([3, 3, 2, 1, 3])//5