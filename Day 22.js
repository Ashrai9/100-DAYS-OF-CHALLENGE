// 1>Valid Anagram
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

function anagram(arr) {
    let sorted = arr.map(x => x.split("").sort().join(""))
    console.log(sorted)
    let result = []
    let compare = [...new Set(sorted)]
    for (let i = 0; i < compare.length; i++) {
        let sub = []
        for (let j = 0; j < arr.length; j++) {
            if (compare[i] == sorted[j]) {
                sub.push(arr[j])
            }
        }
        result.push(sub)
    }
    return result
}
//anagram(["eat","tea","tan","ate","nat","bat"])
// [["bat"],["nat","tan"],["ate","eat","tea"]]
anagram([""])//[""]