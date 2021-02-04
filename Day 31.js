// 1>You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.

function canPlaceFlowers(arr, n) {
    let i = n
    if (arr.length == 1 && arr[0] == 0) {
        return true
    }
    if (arr[0] == 0 && arr[1] == 0) {
        i = i - 1
        arr[0] = 1
    }

    for (let j = 1; j < arr.length; j++) {
        if (j == arr.length - 1 && arr[j] == 0 && arr[j - 1] == 0) {
            i -= 1
            break
        }
        if (arr[j] == 0 && arr[j - 1] == 0 && arr[j + 1] == 0) {
            i -= 1
            arr[j] = 1
        }
    }
    //console.log(i)
    return i <= n ? true : false
}
//canPlaceFlowers([1,0,0,0,1],1)// true
//canPlaceFlowers([1,0,0,0,1],2)// false
//canPlaceFlowers([1,0,0,0,0,1],2)//false
//canPlaceFlowers([1,0,0,0,1,0,0],2)//true
canPlaceFlowers([0, 0, 1, 0, 0], 1)//true
// alternative simple approach:
var canPlaceFlowers = function (arr, n) {
    let count = 0
    let len = arr.length

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0
            && (arr[i - 1] == 0 || i == 0)
            && (arr[i + 1] == 0 || i == len - 1)
        ) {
            arr[i] = 1
            count++
        }
    }
    return count >= n
};