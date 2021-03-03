1//missing number

function missingNumbers(arr, brr) {
    arr.sort((a, b) => a - b)
    brr.sort((a, b) => a - b)
    console.log(arr)
    console.log(brr)
    let result = []
    let i = 0
    let j = 0
    while (i <= arr.length && j < brr.length) {
        if (i == arr.length) {
            result.push(brr.slice(j))
            break
        }
        if (arr[i] != brr[j]) {
            result.push(brr[j])
            j++
        } else {
            i++
            j++
        }
    }
    //console.log(result)
    result = [...new Set(result)]
    return result
}

2// sherlocks and the anagram
function balancedSums(arr) {
    let left = 0
    let right = arr.reduce((a, b) => a + b, 0)

    for (let i = 0; i < arr.length; i++) {
        right -= arr[i]
        if (left == right) {
            return "YES"
        }
        left += arr[i]
        // console.log(left,"l")
        // console.log(right,"r")
        // console.log(mid,"m")
    }

    return "NO"
}
balancedSums([1, 1, 4, 1, 1])//"YES"