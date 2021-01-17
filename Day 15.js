//1> 14:05 partition labels leet code
//A string S of lowercase English letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.

var partitionLabels = function(S) {
    let lastIndexMap = new Map();
    
     // this will hold the last (right-most) position  for each char that we encounter
    
    for(let i=0;i<S.length;i++){
        lastIndexMap.set(S[i], i); // overwrites previous positions to ensure max
    }
    console.log(lastIndexMap,"lastn")
    let start = 0,
        end = 0,
        res = [];
    for(let i=0;i<S.length;i++){ 
      console.log(S[i],"s")
        end = Math.max(end, lastIndexMap.get(S[i])); // get its right most position from map
        if(i == end){ // that means i has reached the last posn of the char
            res.push(end-start+1); //save the range
            console.log(end-start+1,"rgt")
            start = end+1; // set start of next partition
            end = 0; // reset end
        }
    }
    return res;
};
partitionLabels("ababcbacadefegdehijhklij")//[9,7,8]   
// a-0,8,
// b-1,5,
// c-4,7
// d-9,14
// e-10,15
// f-11,11
// g-13,13
// h-16,19
// i-17,22
// j-18,23
// k-20,20
// l-21,21

//The partition is "ababcbaca", "defegde", "hijhklij".
//12