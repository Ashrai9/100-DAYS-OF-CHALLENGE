//1> beautifultriplets-> easy(easy)- 34 min

function beautifulTriplets(d, arr) {
    //11:07
    //k-j=j-i=d // size 3
    arr = arr.sort((a, b) => a - b)
    let re = []
    let count = 0
    let x = 0
    for (let i = 0; i < arr.length; i++) {
        let track = 1
        let sub = []
        x = arr[i]
        for (let j = i + 1; j < arr.length; j++) {
            if (track < 3) {
                if (arr[j] - x == d) {
                    sub.push(x, arr[j])
                    track++
                    x = arr[j]
                }
            } else {
                break
            }
        }
        sub = [...new Set(sub)]
        if (sub.length == 3) count++
    }
    return count
}
beautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10])//3->[1,4,7],[2,5,8],[4,7,10]
2 > //ice-cream parlor- intermediate
    function icecreamParlor(m, arr) {
        //console.log(m,"m",arr,"arr")
        let x = []
        let a, b
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (i != j) {
                    if (arr[i] + arr[j] == m) {
                        a = i + 1
                        b = j + 1
                        x.push(a, b)
                        return x
                    }
                }
            }
        }
        return x
    }
icecreamParlor(4, [1, 4, 5, 3, 2])//1,4=>1+3=4