//Sorting
//bubble sort
function bubbleSort(arr) {
    let n = arr.length
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [[arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]]
            }
        }
    }
    return arr
}
bubbleSort([5, 4, 1, 3, 2])

// insertion sort-The main concept to understand when using this technique is that, there is a portion of the array that is always sorted and a section that remains unsorted.
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j + 1] < arr[j]) {
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
            }
            console.log(arr, "inner")
        }
        console.log(arr, "each")
    }
    return arr
}
insertionSort([5, 4, 1, 3, 2])

// 1> hackerrank insertion part2
function insertionSort2(n, arr) {
    let temp
    for (let i = 1; i < n; i++) {
        let x
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j + 1] < arr[j]) {
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
            }
        }
        x = [...arr].join(" ")
        console.log(x)
    }
}
insertionSort2([1, 4, 3, 5, 6, 2])
// 1 4 3 5 6 2
// 1 3 4 5 6 2
// 1 3 4 5 6 2
// 1 3 4 5 6 2
// 1 2 3 4 5 6