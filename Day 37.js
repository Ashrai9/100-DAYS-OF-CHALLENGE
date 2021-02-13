1 > reverse StringWrite a function that reverses a string.The input string is given as an array of characters char[].

Do not allocate extra space for another array, you must do this by modifying the input array in -place with O(1) extra memory.

You may assume all the characters consist of printable ascii characters.
function reverString(s) {
  console.log(s)
  let l = s.length - 1
  for (let i = 0; i < (s.length - 1) / 2; i++) {
    let temp = s[i]
    s[i] = s[l - i]
    s[l - i] = temp

  }
  console.log(s)
}
reverString(["h", "e", "l", "l", "o"])
//["o","l","l","e","h"]

// easy method to swap:
[s[i], s[l - i]] = [s[l - i], s[i]]

2 > In a row of trees, the i - th tree produces fruit with type tree[i].

You start at any tree of your choice, then repeatedly perform the following steps:

Add one piece of fruit from this tree to your baskets.If you cannot, stop.
Move to the next tree to the right of the current tree.If there is no tree to the right, stop.
Note that you do not have any choice after the initial choice of starting tree: you must perform step 1, then step 2, then back to step 1, then step 2, and so on until you stop.

You have two baskets, and each basket can carry any quantity of fruit, but you want each basket to only carry one type of fruit each.

What is the total amount of fruit you can collect with this procedure ?

  function fruits(arr) {
    let comp = []
    let i = 0
    let j = 0
    let max = 0
    if ([...new Set(arr)].length == 2) return arr.length
    for (let i = 0; i < arr.length; i++) {
      comp.push(arr[i])
      x = [...new Set(comp)].length
      if (x <= 2) {
        max = Math.max(max, comp.length)
      } else {
        comp.splice(0, 1)
      }
      //console.log(comp)
    }
    return max
  }
    fruits([1, 2, 1])//3
//fruits([1,2,3,2,2])//4
//fruits([3,3,3,1,2,1,1,2,3,3,4])//5
// hackerrank chop the sticks
function cutTheSticks(arr) {
  let y = []
  let re = []
  while (arr.length > 0) {
    let shortestElement = Math.min(...arr)
    console.log(shortestElement)
    re.push(arr.length)
    for (let i = 0; i < arr.length; i++) {
      let x = arr[i] - shortestElement
      if (x != 0) y.push(x)

    }
    arr = [...y]
    y = []

  }
  return re
}
cutTheSticks([5, 4, 4, 2, 2, 8])//[6,4,2,1]




