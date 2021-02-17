1 > sherlocks anagram
function sherlockAndAnagrams(s) {
    let x = []
    let count = 0
    for (let i = 0; i <= s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            let y = s.slice(i, j)
            y = y.split("").sort().join("")
            x.push(y)
        }
    }
    x = x.sort()
    console.log(x)
    for (let i = 0; i < x.length; i++) {
        for (let j = i + 1; j < x.length; j++) {
            if (x[i] == x[j]) {
                count += 1
            }
        }
    }
    return count
}

sherlockAndAnagrams("abba")//4->[a,a],[b,b][ab,ba],[abb,bba]

2 >> hackerhappy

function appendAndDelete(s, t, k) {
    let a = s.length
    let b = t.length
    let q = (a >= b) ? s : t
    let count = 0
    console.log(a, b, "ab")
    for (let i = 0; i < q.length; i++) {
        if (s[i] == t[i]) {
            count += 1
        } else {
            break
        }
    }
    console.log(count, "count")
    let z = k - ((a + b) - 2 * count)
    console.log(z, "z")

    if (a + b <= k) {
        return "Yes"
    } else if (z >= 0) {
        if (z % 2 == 0) {
            return "Yes"
        } else {
            return "No"
        }
    }
    return "No"
}

appendAndDelete("hackerhappy", "hackerrank", 9)//Yes
appendAndDelete("aba", "aba", 7)//yes
appendAndDelete("ashley", "ash", 2)//No

3. Lisas workshop-Hackerrank

function workbook(n, k, arr) {
    let page=1
    let count=0
    let m=1
for(let i=0;i<arr.length;i++){
    
    for(let j=1;j<=arr[i];j++){
        if(j<=k*m){
                if(page==j){
                    count+=1
                }
        }else{
        page++
        if(page==j){
            count+=1
        }
        m++
        }
}
page++
m=1
}
return count
}
workbook(5,3,[4,2,6,1,10])//4
