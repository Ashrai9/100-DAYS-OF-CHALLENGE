//1> jumping on the cloud revisted
function jumpingOnClouds(c, k) {
    let n = c.length
    let e = 100
    let x
    let index = (0 + k) % n
    let count = 0
    while (index < n) {
        if (c[index] == 1) {
            e -= 3
        } else {
            e -= 1
        }
        if (index == 0) return e
        index = (index + k) % n
    }
    return e
}
jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0])//92

//2> chocolate feast
function chocolateFeast(n, c, m) {
    let chocolate = Math.floor(n / c)
    let total = chocolate
    let i = 0
    //console.log(chocolate,"jchluh")
    while (i < n) {
        let remainingBar = chocolate % m
        //console.log(remainingBar,"remain")
        let wrapperToBar = (chocolate - remainingBar) / m
        //console.log(wrapperToBar,"warp")
        total += wrapperToBar
        //console.log(total,"total")
        chocolate = remainingBar + wrapperToBar
        //console.log("choclet",chocolate)
        if (chocolate == 0) return total
        i++
    }
    return total
}
chocolate([15, 3, 2])//9

//3>ACM IPC
function acmTeam(topic) {
    //console.log(topic)
    let team = 0
    let max = 0
    for (let i = 0; i < topic.length - 1; i++) {
        for (let j = i + 1; j < topic.length; j++) {
            let x = 0
            for (let m = 0; m < topic[i].length; m++) {
                if (topic[i][m] == 1 || topic[j][m] == 1) {
                    x++
                }
            }
            if (x > max) {
                max = x
                team = 1
            } else if (x == max) {
                team++
            }
        }
    }
    //console.log(max)
    //console.log(team)
    return [max, team]

}
acmTeam(["10101", "11110", "00010"])//5,2

//4>Taum and B'day
function taumBday(b, w, bc, wc, z) {
    b = BigInt(b)
    w = BigInt(w)
    bc = BigInt(bc)
    wc = BigInt(wc)
    z = BigInt(z)

    if (bc > wc + z) {
        bc = wc + z
    } else if (wc > bc + z) {
        wc = bc + z
    }
    return (b * bc + w * wc)
}
taumBday(10, 10, 1, 1)//20

//5>grid challenge
function gridChallenge(grid) {
    let x=grid.map(y=>y.split("").sort())
    console.log(x)
     
    for(let j=0;j<x.length;j++){
        for(let i=0;i<x[0].length-1;i++){
            //console.log("x",x[i][j],"y",x[i+1][j])
            if(x[i][j]>x[i+1][j]){
                return "NO"
            }
        }
    }
    return "YES"
    }
    gridChallenge(['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv'])//"yes"