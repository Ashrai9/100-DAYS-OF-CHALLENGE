//1>pokemon --13 minutes on average, 11:03--19->16 min
//Return the minimum number of flats which Sergei B. should visit in order to catch Pokemons of all types which there are in the house. 

function pokemon(arr) {
    let reg = /[,\s]/g
    let x = arr.replace(reg, "")
    let y = [...new Set(x)].length
    console.log(x)
    console.log(y)
}
//pokemon("A,A,a,")// 2
pokemon("A,A,a,c,Cs")//5

2 >//2> Subarray avg 28 min 11:21->11:33->12:56->12:59->15 min
    //Return the maximum length of an increasing subarray of the given array. 
    function subarray(arr) {
        console.log(arr)
        let count = 0
        let min = arr[0]
        for (let i = 1; i < arr.length; i++) {
            if (min < arr[i]) {
                count += 1
            } else if (min == arr[i]) {
                continue
            } else {
                count = 1
            }
            min = arr[i]
        }
        return count
    }
subarray([1, 7, 2, 11, 15])//answer-> 2 i.e 2,11,15
//3>Matrix To Heaven- easy->13:06
//You need to return the all possible paths as array of strings from the given function.
// took lot of time to get to the logic
function possible(m,n,arr){
    let newArr=[]
    let x=arr[0]
    let y=arr[1]
    let t=1
    for(let i=0;i<m;i++){
     let result=x.slice(0,t).concat(y.slice(t-1))
     newArr.push(result)
     t++
    }
    newArr.push(x.slice(0).concat(y.slice(-1)))
    console.log(newArr)
    }
    possible(2,3,[[1,2,3],[4,5,6]])// expected [1,4,5,6],[1,2,5,6],[1,2,3,6]
    //
    // 00 10 11 12
    // 00 01 11 12
    // 00 01 02 12

