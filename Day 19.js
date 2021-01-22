1 >> alternative solution for day 18 isomorphic problem
var isomorphic = function (s, t) {
    var hashs = {};
    var hasht = {};

    for (var i = 0; i < s.length; i++) {
        if (hashs[s[i]] == undefined) hashs[s[i]] = i;
        console.log(hashs[s[i]], "s")
        if (hasht[t[i]] == undefined) hasht[t[i]] = i;
        console.log(hasht[t[i]], "t")
        console.log(hashs, "s")
        console.log(hasht, "t")
        if (hashs[s[i]] != hasht[t[i]]) return false;
    }
    return true;
};
//isomorphic("egg","add")// true
isomorphic("foo", "bar")//false
//2> word pattern

function pattern(m, n) {
    //console.log(m,n)
    n = n.split(" ")
    //console.log(n)
    let hasm = {}
    let hasn = {}
    if (m.length !== n.length) {
        return false
    }
    for (let i = 0; i < m.length; i++) {
        if (hasm[m[i]] == undefined) {
            hasm[m[i]] = i
        }
        if (hasn[n[i]] == undefined) {
            hasn[n[i]] = i
        }
        console.log(hasm, "m")
        console.log(hasn, "n")
        if (hasm[m[i]] != hasn[n[i]]) {
            return false
        }
    }
    return true
}
//pattern("abba","dog cat cat dog")//true
//pattern("abc","b c a")//true
pattern("aaa", "aa aa aa aa")//false