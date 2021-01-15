// 1-> fresh oranges, 2-> rotten oranges, 0-> empty cell
// if any fresh oranges present adjacent to rotten orange the they also turn out to be rotten
//count the number of times it take to convert all the oranges to rotten //19:20

function convert(arr) {
    let pos = []
    let m = arr.length
    let n = arr[0].length
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (arr[i][j] == 2) {
                pos.push([i, j])
            }
        }
    }
    console.log(pos)
    let x = 0
    let flag = false
    let count = 0

    while (x < pos.length) {
        //console.log(x,pos.length)
        let i = pos[x][0]
        let j = pos[x][1]
        //console.log(i,j)
        if ((j - 1 >= 0 && j - 1 < n) && (arr[i][j - 1] == 1)) {
            arr[i][j - 1] = 2
            pos.push([i, j - 1])
            flag = true
        }
        if ((j + 1 >= 0 && j + 1 < n) && (arr[i][j + 1] == 1)) {
            arr[i][j + 1] = 2
            pos.push([i, j + 1])
            flag = true
        }

        if ((i + 1 >= 0 && i + 1 < m) && (arr[i + 1][j] == 1)) {
            arr[i + 1][j] = 2
            pos.push([i + 1, j])
            flag = true
        }
        if ((i - 1 >= 0 && i - 1 < m) && (arr[i - 1][j] == 1)) {
            arr[i - 1][j - 1] = 2
            pos.push([i - 1, j])
            flag = true
        }


        if (flag == true) {
            count += 1
            flag = false
        }
        x += 1
    }
    console.log(count)
}
convert([[2, 1, 1], [1, 1, 0], [0, 1, 1]])// 4
convert([[0, 2]])//0
// 2 1 1  00 01 02
// 1 1 0  10 11 12
// 0 1 1  20 21 22

// pos->[[0,0],[0,1],[1,0],[0,2],[1,1],[2,1],[2,2]]
2 >// most common word 
    // find the most common word in the paragrah apart from thr banned words
    //30 min

    function word(para, ban) {
        let obj = []
        let paras = para.toLowerCase().split(/\s+/g)
        console.log(paras)
        for (let i of paras) {
            if (obj[i]) {
                obj[i] += 1
            } else {
                obj[i] = 1
            }
        }
        let x = Object
            .entries(obj)
            .sort((a, b) => b[1] - a[1])
        console.log(x, "ooo")
        let y = 0
        for (let i = 0; i < ban.length; i++) {

            if ((x[y][0]) == ban[i]) {
                y++
            }
        }
        console.log(x[y][0], "ans")
        console.log(x)
    }
word("Bob hit a ball, the hit BALL flew far after it was hit.", ['hit', "bob"])    