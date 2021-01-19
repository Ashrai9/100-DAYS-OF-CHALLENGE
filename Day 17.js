//1>longest common prefix
function longestCommonPrefix(arr) {
    console.log(arr)
    let comp = arr[0]
    let j = 0

    if (arr.length == 0) {
        return ""
    }
    for (let i = 1; i < arr.length; i++) {
        let temp = ""
        while ((j < comp.length) && (j < arr[i].length)) {
            if (comp[j] == arr[i][j]) {
                temp += comp[j]
                j++
            } else {
                break
            }
        }
        comp = temp
        j = 0
    }
    console.log(comp)
}
longestCommonPrefix(["flower", "flow", "flight"])//fl