// Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).
function maxProduct(arr) {
    //console.log(arr)
    let max = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i != j) {
                let x = (arr[i] - 1) * (arr[j] - 1)
                max = Math.max(max, x)
            }
        }
    }
    return max
}
maxProduct([3, 4, 5, 2])//12
maxProduct([1, 5, 4, 5])//16

//     2> Letter case permutation
//     Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.

// Return a list of all possible strings we could create. You can return the output in any order.
/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function (arr) {
    let word = ""
    let result = []
    let len = 0

    helper(word, len)
    return result

    function helper(word, len) {
        if (len == arr.length) return result.push(word)
        let x = arr[len]
        console.log(x)
        if (x <= 9) {
            helper(word + x, len + 1)
        } else {
            helper(word + x.toUpperCase(), len + 1)
            helper(word + x.toLowerCase(), len + 1)
        }
    }

}

letterCasePermutation("a1b2")//["a1b2","a1B2","A1b2","A1B2"]
//3> unique email address
function numUniqueEmails(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        let x = arr[i].split("@")
        //console.log(x,"x")
        let y = ""
        for (let i = 0; i < x[0].length; i++) {
            if (x[0][i] != "." && x[0][i] != "+") {
                y += x[0][i]
            }
            if (x[0][i] == "+") {
                break
            }
        }
        y = y + "@" + x[1]
        result.push(y)
    }
    return [...new Set(result)]
}

numUniqueEmails(["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"])//2
  //numUniqueEmails(["test.email+alex@leetcode.com", "test.email@leetcode.com"])//1