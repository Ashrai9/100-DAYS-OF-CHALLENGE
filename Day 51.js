//1> closest number
function closestNumbers(arr) {
    arr.sort((a, b) => b - a)
    let min = 1000000
    let result = []
    for (let i = 1; i < arr.length; i++) {
        let diff = arr[i - 1] - arr[i]
        if (diff <= min) {
            min = diff
        }
    }
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] - arr[i] == min) {
            result.push(arr[i - 1], arr[i])
        }
    }
    return result.sort((a, b) => a - b)
}
closestNumbers([5, 4, 3, 2])//[2,3,3,4,4,5]
//2> find the median
function findMedian(arr) {
    arr.sort((a, b) => a - b)
    let x = arr.length / 2
    let y
    if (x !== 0) {
        y = Math.floor(x)
        return arr[y]
    }

}
findMedian([0, 1, 2, 4, 6, 5, 3])//3