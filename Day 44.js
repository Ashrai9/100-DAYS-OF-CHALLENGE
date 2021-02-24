//1>fair rations
function fairRations(arr) {
    console.log(arr, "arr")
    let sum = 0
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] % 2 != 0) {
            arr[i] += 1
            arr[i + 1] += 1
            sum += 2
        }
    }
    console.log(arr, "arr")
    let y = arr.every(a => a % 2 == 0)
    return y == true ? sum : "NO"
}
fairRations([4, 5, 6, 7])//4
fairRations([1, 2])//NO

//2>making Anagrams
function makingAnagrams(s1, s2) {
    s1 = s1.split("")
    s2 = s2.split("")
    let total = s1.length + s2.length
    let count = 0
    for (let i = 0; i < s1.length; i++) {
        let x = s2.indexOf(s1[i])
        if (x != -1) {
            count += 2
            s2[x] = ""
        }
    }
    let re = total - count
    return re
}
makingAnagrams("cde", "abc")//4