//3> D Array - Matrix in diagonal Order ->18:22

function diagnl(arr, m, n) {
    console.log(arr)
    let order = []
    for (let i = 0; i < arr.length; i++) {
        let sub = arr[i].split(/\s+/g)
        order.push(sub)
    }
    console.log(order)
    // main operation
    let result = ""
    for (let i = 0; i < n; i++) {
        let row = i
        let col = 0
        while (row >= 0 && col < n) {
            result += (order[row][col] + " ")
            row--
            col++
        }
        result += "\n"
    }
    for (let i = 0; i < n; i++) {
        let row = n
        let col = i
        while (row > 0 && col < n) {
            result += (order[row][col] + " ")
            row--
            col++
        }
        result += "\n"
    }
    console.log(result)
}

diagnl(["1 2 3 4", "5   6 7 8", "9 10 11 12", "13 14 15 16", "17 18 19 20"], 5, 4)

   // 1 2 3 4      00 01 02 03  00
   // 5 6 7 8      10 11 12 13  10 01
   // 9 10 11 12   20 21 22 23  20 11 02
   // 13 14 15 16  30 31 32 33  30 21 12 03
   // 17 18 19 20  40 41 42 43  40 31 22 13
   //                           41 32 23
   //                           42 33
   //                           43