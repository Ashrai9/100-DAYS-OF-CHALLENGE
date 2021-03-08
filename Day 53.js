// larrys array
//-> inversion concept (checks how far/near is from being sorted)
function larrysArray(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                count++
            }
        }
    }
    if (count % 2 != 0) return "NO"
    return "YES"
}

larrysArray([1, 6, 5, 2, 4, 3])//yes 

//2>sherlock and the valid string
function isValid(s) {
    s=s.split("")
let obj={}
for(let i of s){
    if(obj[i]){
        obj[i]+=1
    }else{
        obj[i]=1
    }
}
let x=Object.values(obj).sort((a,b)=>a-b)
let first=x[0]
let second=x[1]
let last =x[x.length-1]
let secondLast=x[x.length-2]
//console.log(x)
if(first==last) return "YES"
if(first==1&&second==last) return "YES"
if(first==secondLast&&secondLast==last-1) return "YES"

return "NO"
}
isValid("abcdefghhgfedecba")//YES