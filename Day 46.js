//1> separate the numbers

https://www.hackerrank.com/challenges/separate-the-numbers/problem?isFullScreen=true

function check(arr) {
    console.log(arr)
    let n = arr.length
    let k = 0
    let prev
    let flag = "NO"
    let a
    while (k < Math.ceil(n)) {
        a = parseInt(arr.slice(0, k + 1))
        console.log(a, "a")
        let arr1 = a
        prev = a
        console.log(prev, "prev")
        for (let i = k; i < n; i++) {
            prev += 1
            console.log(prev, "p")
            arr1 = arr1.toString() + prev.toString()
            console.log(arr1, "arr1")
            if (arr1.length > n) {
                break
            }
            if (arr1.length == n && arr == arr1.toString()) {
                flag = "YES"
                break
            }
        }
        k++
        if (flag == "YES") break
    }
    console.log(flag, a)
}
check("99100")// yes 99

2// minimum absolute difference
function minimumAbsoluteDifference(arr) {
    arr = arr.sort((a, b) => b - a)
    let min = Math.max(...arr)
    for (let i = 0; i < arr.length - 1; i++) {
        let x = arr[i] - arr[i + 1]
        if (x < min) {
            min = x
            if (min == 0) return min
        }
    }
    return min
}

minimumAbsoluteDifference([3, -7, 0])//3
//3 Marks cake walk
function marcsCakewalk(calorie) {
    calorie.sort((a, b) => b - a)
    let x = 0
    for (let i = 0; i < calorie.length; i++) {
        x += Math.pow(2, i) * calorie[i]
    }
    return x
}
marcsCakewalk([1, 3, 2])//11

//4 mark and toys
function maximumToys(k, arr) {
    arr.sort((a, b) => a - b)
    let count = 0
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        if (total + arr[i] <= k) {
            total += arr[i]
            count++
        } else if (total > k) {
            return count
        }
    }
    return count
}
maximumToys(50, [1, 12, 5, 111, 200, 1000, 10])//4

//5 permuting two array

function twoArrays(k, A, B) {
    A.sort((a, b) => a - b)
    B.sort((a, b) => b - a)
    //console.log(A,B)
    let flag = false
    for (let i = 0; i < A.length; i++) {
        if (A[i] + B[i] < k) {
            return "NO"
        }
    }
    return "YES"
}
//twoArrays(5,[1, 2, 2, 1],[3, 3, 3, 4])//no 
twoArrays(10, [2, 1, 3], [7, 8, 9])//yes

//5 jim and the others
// long method
function jimOrders(orders) {
    let arr = []

    // get the array as[customer,oderno,totaltime]  
    for (let i = 0; i < orders.length; i++) {
        let total = orders[i][0] + orders[i][1]
        arr.push([i + 1, orders[i][1], total])
    }
    //console.log(arr)
    arr.sort((a, b) => a[2] - b[2])
    //console.log(arr)
    // now perform operation if you find same deliver totaltime
    let re = []
    let flag = false
    let y = [...new Set(arr[2])]
    if (y == arr.length) {
        return y
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i][2] == arr[j][2]) {
                flag = true
                if (re[i - 1][1] < re[i][1]) {
                    re.push(arr[i][0], arr[i + 1][0])
                    i++
                } else {
                    re.push(arr[i + 1][0], arr[i][0])
                    i++
                }
            }
        }
        if (flag == false) {
            re.push(arr[i][0])
        }
    }
    return re
}
//best solution
function jimOrders(orders) {
    return orders.map((x, i) => [i + 1, x[0] + x[1]])
                .sort((x, y) => x[1] - y[1])
                .map(x => x[0]);
    }

    jimOrders([[8,1],[4,2],[5,6],[3,1],[4,3]])//[4,2,5,1,3]
   