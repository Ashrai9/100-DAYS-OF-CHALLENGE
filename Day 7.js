//1> smallest subarray 11:23-12:07->42, avg 50 min
//Given an array of integers and a number x, find the smallest subarray with sum greater than the given value. Print the length of the smallest subarray.
function smallestSub(arr, n) {
    let subArray = []
    for (let i = 0; i < arr.length; i++) {
        let sum = arr[i]
        for (let j = i + 1; j < arr.length; j++)
            if (sum + arr[j] > n) {
                subArray.push([sum + arr[j], (j - i) + 1])
            } else {
                sum = arr[i] + arr[j]
            }
    }
    let result1 = subArray.sort((a, b) => a[1] - b[1])
    return result1[0][1]
}
smallestSub([1, 4, 45, 6, 0, 19], 51)// {4,45,6}-> ans 3

//different approach :
{
    //  Initilize length of smallest subarray as n+1 
    int min_len = n + 1;

    // Pick every element as starting point 
    for (int start = 0; start < n; start++)
    {
        // Initialize sum starting with current start 
        int curr_sum = arr[start];

        // If first element itself is greater 
        if (curr_sum > x)
            return 1;

        // Try different ending points for curremt start 
        for (int end = start + 1; end < n; end++)
        {
            // add last element to current sum 
            curr_sum += arr[end];

            // If sum becomes more than x and length of 
            // this subarray is smaller than current smallest 
            // length, update the smallest length (or result) 
            if (curr_sum > x && (end - start + 1) < min_len)
                min_len = (end - start + 1);
        }
    }
    return min_len;
}
//2>Given an array of size n where all elements are in range from 0 to n-1, change contents of arr[] so that arr[i] = j is changed to arr[j] = i. 12:45->12:50->10
//Since arr[0] is 1, arr[1] is changed to 0 Since arr[1] is 3, arr[3] is changed to 1 Since arr[2] is 0, arr[0] is changed to 2 Since arr[3] is 2, arr[2] is changed to 3.
function change(arr) {
    let result1 = []
    for (let i = 0; i < arr.length; i++) {
        let ans = arr[i]
        result1[ans] = i
    }
    console.log(result1)
}
change([1, 3, 0, 2])//2031
//3>Toepliz Matrix left to right diagonal matrix else return -1// 16:30-> 17:10-> 40

function toepliz(arr) {
    console.log(arr)
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr[0].length - 1; j++) {
            if (arr[i][j] !== arr[i + 1][j + 1]) {
                return -1
            }
        }
    }
    return 1
}

toepliz([[6, 7, 8, 9, 2], [4, 6, 7, 8, 9], [1, 4, 6, 7, 8], [0, 1, 4, 6, 7]])//1
// 00 01 02
// 10 11 12
// 20 21 22

//4> Display minimum amount of time taken to display the string"s".note it is 3x3 matrix 17:15->18:11->56 min
function keyboard(keypad, s) {
    console.log(keypad, s)
    let pos = []
    let matrix = []
    let k = 0
    for (let i = 0; i < 3; i++) {
        let sum = []
        for (let j = 0; j < 3; j++) {
            sum.push(keypad[k])
            k++
        }
        matrix.push(sum)
    }
    console.log(matrix)

    // find the positions of s
    let n = 0
    let q = s.split("")

    while (n < s.length) {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (q[n] === matrix[i][j]) {
                    pos.push([i, j])
                }
            }
        }
        n++
    }
    // perform main operation
    console.log(pos)
    let total = 0
    for (let i = 0; i < s.length - 1; i++) {
        let x = [Math.abs(pos[i][0] - pos[i + 1][0]), Math.abs(pos[i][1] - pos[i + 1][1])]
        total += Math.max(...x)
    }
    console.log(total)
}
keyboard("923857614", "423692")//8
