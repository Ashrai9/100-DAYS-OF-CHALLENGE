// Funny String
function funnyString(s) {
    s = s.split("")
    //console.log(s,"s")
    let x = []
    for (let i = 0; i < s.length; i++) {
        let z = s[i].charCodeAt()
        x.push(z)
    }
    let forward = [...x]
    let backward = x.reverse()
    //console.log(forward,backward)
    let forCompr = diff(forward).toString()
    let backComp = diff(backward).toString()
    for (let j = 0; j < forCompr.length; j++) {
        if (forCompr[j] != backComp[j]) return "Not Funny"
    }
    return "Funny"
}
function diff(x) {
    let arr = []
    for (let i = 1; i < x.length; i++) {
        arr.push(Math.abs([x[i - 1] - x[i]]))
    }
    return arr
}

funnyString("acxz")//[97,99,120,122]->explanation-> the adjacent difference and "zxca" adjacent diff is same hence its funny 


2 > gemstone:

function gemstones(arr) {
    let combined = arr.join('');
    let unique = [...new Set(combined)];
    let result = unique.filter(ch =>
        arr.every(str => str.includes(ch)));
    return result.length;

}

gemstones(['abcdde', 'baccd', 'eeabg'])//3-> a&b 