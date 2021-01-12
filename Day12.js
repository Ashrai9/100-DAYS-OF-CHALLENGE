function count(arr) {
    let x = /[a-z]|\d+/ig
    let y = arr.match(x)
    let first = []
    let i = 0
    for (let i = 0; i < arr.length - 2; i += 2) {
        first.push([y[i], y[i + 1]])
    }
    console.log(first)
    let obj = {}
    for (let i in first) {
        let k = first[i][0]
        let v = parseInt(first[i][1])
        if (obj[k]) {
            obj[k] += v
        } else {
            obj[k] = v
        }
    }
    let second = Object.entries(obj).sort()
    console.log(second)
}
count("a12c56a1b5")//"a13b5c56"
//2>12:06->12:22->16min
function order(arr) {
    let n = arr.length
    let newArr = [...arr]
    let first = arr.sort((a, b) => b - a)
    //console.log(first)
    let positions = []
    for (let i = 0; i < first.length; i++) {
        positions.push(i + 1)
    }
    //console.log(positions)
    result = []
    console.log(newArr)
    console.log(first)
    console.log(positions)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (newArr[i] === first[j]) {
                result.push(positions[j])
                break
            }
        }
    }
    console.log(result)
}
//order([100,50,50,25])//[1,2,2,4]
order([20, 40, 60, 80, 100])//[5,4,3,2,1]

//100,80,60,40,20
//1,2,3,4,5
3 >//25 min
    // spiral

    function spiral(arr) {
        let left = 0
        let right = arr[0].length - 1

        let top = 0
        let bottom = arr.length - 1
        let result = []
        let arrLength = arr.length * arr[0].length

        while (result.length < arrLength) {
            for (let i = left; i <= right && result.length < arrLength; i++) {
                result.push(arr[top][i])
            }
            top++
            for (let i = top; i <= bottom && result.length < arrLength; i++) {
                result.push(arr[i][right])
            }
            right--
            for (let i = right; i >= left && result.length < arrLength; i--) {
                result.push(arr[bottom][i])
            }
            bottom--
            for (let i = bottom; i >= top && result.length < arrLength; i--) {
                result.push(arr[i][left])
            }
            left++
        }
        return result
    }
spiral([[1, 2, 3], [4, 5, 6], [7, 8, 9]])//[1,2,3,6,9,8,7,4,5]

  // 1 2 3  
  // 4 5 6
  // 7 8 9