1 >// count stars between "!" for example !*!* answer avg 22 min

    function compare(arr) {
        console.log(arr)
        let start = 0
        let count = 0
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == "!" && start == 0) {
                start += 1
            } else if (arr[i] == "*" && start == 1) {
                count += 1
            } else if (arr[i] == "!" && start == 1) {
                start -= 1
            }
        }
        return count
    }
compare("*!**!**!*!*")//o/p 3 stars
//compare("*!!*!**!")
2 >//Given a boolean matrix mat[M][N] of size M X N, modify it such that if a matrix cell mat[i][j] is 1 (or true) then make all the cells of ith row and jth column as 1.
    function bool(m, n, arr) {
        let result = []
        console.log(arr)
        let k = []
        let l = []
        for (let i = 0; i < m; i++) {
            let sub = []
            for (let j = 0; j < n; j++) {
                if (arr[i][j] == 1) {
                    k.push(i)
                    l.push(j)
                }
                sub.push(0)
            }
            result.push(sub)
        }
        console.log(k, l)
        console.log(result)
        let lenk = k.length
        let lenl = l.length
        let s = 0
        while (k[s] < lenk || l[s] < lenl) {
            let x = k[s]
            let y = l[s]
            for (let j = 0; j < n && k[s] < lenk; j++) {
                result[x][j] = 1
            }
            for (let j = 0; j < n && l[s] < lenl; j++) {
                result[j][y] = 1
            }
            s++
        }
        console.log(result)
    }
//bool(2,2,[[1,0],[0,0]])//[[1,1],[1,0]]
bool(3, 3, [[1, 0, 1], [0, 0, 0], [0, 1, 0]])//[[1,1,1],[1,1,1],[1,1,1]]
// 1 0  00 01
// 0 0  10 11
