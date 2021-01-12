// 1>Simi was learning about strings and Queue. She was writing random strings on paper but got stuck on one. She got fascinated by the string and thought of challenging you for the same. She will provide you with the strings and you have to print the output in the similar format as the given example. Carefully look at the example to understand the format of writing string. She has also asked you to use Queue for the same.
function main(...arr) {
    let result = []
    let y
    for (let i = 0; i < arr.length; i++) {
        y = check(arr[i])
        result.push(y)
    }
    return result
}
function check(arr) {
    let x = ""
    let n = arr.length
    let i = 0
    let m = n - 1
    while (i < n / 2) {
        if (i < Math.floor(n / 2)) {
            x += arr[i]
        }
        if (m >= Math.ceil((n - 1) / 2)) {
            x += arr[m]
        }
        i++
        m--
    }
    return x
}
main("TechGig", "String", "Queue")
