//1> Given an integer n, return true if it is a power of two.Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.
function isPowerOfTwo(n) {
    let flag
    while (n >= 1) {
        if (n === 1) {
            flag = true
            break
        }
        if (n % 2 != 0) {
            flag = false
            break
        }
        n = n / 2
    }
    return flag == true ? true : false
};
isPowerOfTwo(8) //true
isPowerOfTwo(6) //false

//2. Longest Substring Without Repeating Characters
function subString(s) {
    let i = 0
    let j = 0
    let comp = []
    let maxi = 0

    while ((i < s.length) && (j < s.length)) {
        if (comp.includes(s[i])) {
            //console.log(comp,"comp")
            comp.splice(0, 1)
            j++
        } else {
            comp.push(s[i])
            maxi = Math.max(maxi, i - j + 1)
            i++
        }
    }
    return maxi
}
//subString("pwwkew")//3
//subString("bbbbb")//1
subString("abcabcbb")//3

