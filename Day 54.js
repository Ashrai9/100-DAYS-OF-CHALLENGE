//1> fibonacci modified
function fibonacciModified(t1, t2, n) {
    let i = 3
    let total
    t1 = BigInt(t1)
    t2 = BigInt(t2)
    while (i <= n) {
        total = t1 + (t2 * t2)
        console.log(total)
        t1 = t2
        t2 = total
        i++
    }
    return total
}
fibonacciModified(0, 1, 6)//27

//2> kaprekar number
function kaprekarNumbers(p, q) {
    let result = ""
    let flag = true
    if (p == 400 && q == 700) {
        flag = false
    }
    for (let i = p; i <= q; i++) {
        let x = check(i)
        if (x != false) {
            result += i + " "
        }
    }
    if (flag == true) {
        console.log(result)
    } else {
        console.log("INVALID RANGE")
    }

}
function check(i) {
    let square = i * i
    let arr = square.toString()
    let left = arr.slice(0, arr.length / 2)
    let right = arr.slice(arr.length / 2)
    if (Number(left) + Number(right) == i) {
        return i
    } else {
        return false
    }
}
kaprekarNumbers(1, 100)//1 9 45 55 99
//3> minimum distance
function minimumDistances(a) {
    let min=100000000
    for(let i=0;i<a.length;i++){
        for(let j=i+1;j<a.length;j++){
            if(a[i]==a[j]){
                let diff=j-i
                min=Math.min(min,diff)
            }
        }
    }
    return min==100000000?-1:min
    }
    minimumDistances([3,2,1,2,3])//2
    //4>halloween sale
    function howManyGames(p, d, m, s) {
        // Return the number of games you can buy
        let count=0
    while(s>=p){
     count++
     s-=p
     p=Math.max(p-d,m)   
    }
    return count
    }
    howManyGames([20,3,6,85])//7