// // 1>> easy valid boomerang
// A boomerang is a set of 3 points that are all distinct and not in a straight line.

// Given a list of three points in the plane, return whether these points are a boomerang.

function isBoomerang([[ax, ay], [bx, by], [cx, cy]]) {
    return ((by - ay) * (cx - bx) !== (cy - by) * (bx - ax));
}

//2>>In a town, there are N people labelled from 1 to N.  There is a rumor that one of these people is secretly the town judge.

// If the town judge exists, then:

// The town judge trusts nobody.
// Everybody (except for the town judge) trusts the town judge.
// There is exactly one person that satisfies properties 1 and 2.
// You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.

// If the town judge exists and can be identified, return the label of the town judge.  Otherwise, return -1.

var findJudge = function (N, trust) {
    let trustCounts = new Array(N + 1).fill(0);
    console.log(trustCounts)
    console.log(trust)
    for (let [a, b] of trust) {
        trustCounts[a] -= 1;
        console.log(trustCounts[a], "a")
        trustCounts[b] += 1;
        console.log(trustCounts[b], "b")
    }
    console.log(trustCounts)
    for (let i = 1; i < trustCounts.length; i++) {
        if (trustCounts[i] === N - 1) {
            return i
        }
    }
    return -1
};
findJudge(4, [[1, 3], [1, 4], [2, 3]])//-1
//findJudge(3,[[1,3],[2,3]])//3
// 2,1

