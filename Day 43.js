//1 > save the prisoner
function saveThePrisoner(n, m, s) {
    let result1 = (m + s - 1) % n
    if (result1 == 0) {
        return n
    } else {
        return result1
    }
}
saveThePrisoner([4, 6, 2])// 3
// 2.  Utopian Tree
function utopianTree(n) {
    // %2=> add 1 else double it
    if (n == 0) {
        return 1
    }
    if (n % 2 == 0) {
        return 1 + utopianTree(--n)
    } else {
        return 2 * utopianTree(--n)
    }
}
utopianTree(4)//7
//if n=0-> 1
//  n=1-> 2*!=2
//n=2->2+1=>3
//n=3->2*3=6
//n=4->6+1=7

//3>sherlock and squares 
function squares(a, b) {
    let i = 1
    let square
    let count = 0
    while (i <= b) {
        square = i * i
        if (square >= a && square <= b) count += 1
        i++
    }
    return count
}
squares(3, 9)//2
//4> find the largest subarray
function subarray(arr){
    //console.log(arr)
    let max=arr.reduce((ac,cv)=>ac+cv,0)
    let result=[...arr]
    let x,y
    for(let i=0;i<arr.length;i++){
      for(let j=i+1;j<=arr.length;j++){
        x=arr.slice(i,j)
        y=x.reduce((ac,cv)=>ac+cv,0)
        if(y>max){
          result=[...x]
          max=y
        }
        //console.log(x)
      }
    }
    return result
    }
    subarray([2,-1,2,4,-3])//2,-1,2,4
    subarray([1,2,3])//[1,2,3])
    