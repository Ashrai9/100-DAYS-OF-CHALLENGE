//Rotate String: We are given two strings, A and B.

A shift on A consists of taking string A and moving the leftmost character to the rightmost position.For example, if A = 'abcde', then it will be 'bcdea' after one shift on A.Return True if and only if A can become B after some number of shifts on A.

function check(a, b) {
    console.log(a, b)
    if (a == b) {
        return true
    }
    let x = a.slice(1).concat(a.slice(0, 1))
    let comp = [...a]
    let i = 0
    while (i < comp.length) {
        if (x == b) {
            return true
        } else {
            x = x.slice(1).concat(x.slice(0, 1))
        }
        i++
    }
    return false
}
//check("abcde","cdeab")//true
check("abcde", "abced")//false

2 > goat latin:
A sentence S is given, composed of words separated by spaces.Each word consists of lowercase and uppercase letters only.

We would like to convert the sentence to "Goat Latin"(a made - up language similar to Pig Latin.)

The rules of Goat Latin are as follows:

If a word begins with a vowel(a, e, i, o, or u), append "ma" to the end of the word.
For example, the word 'apple' becomes 'applema'.

If a word begins with a consonant(i.e.not a vowel), remove the first letter and append it to the end, then add "ma".
For example, the word "goat" becomes "oatgma".

Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
For example, the first word gets "a" added to the end, the second word gets "aa" added to the end and so on.
Return the final sentence representing the conversion from S to Goat Latin.

function check(arr) {
    arr = arr.split(" ")
    console.log(arr)
    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    let result = ""
    let x, y
    let count = ""
    for (let i = 0; i < arr.length; i++) {
        if (vowels.includes(arr[i][0])) {
            result += arr[i] + "ma"

        } else {
            y = arr[i].split("").shift()
            x = arr[i].slice(1)
            console.log(y, "x")
            result += x + y + "ma"

        }
        count += "a"
        result += count + " "
    }
    return result.slice(0, result.length - 1)
}
check("I speak Goat Latin")//"Imaa peaksmaaa oatGmaaaa atinLmaaaaa"