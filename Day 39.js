//1>flatted space station
function flatlandSpaceStations(n, c) {
    //console.log(n,c)
    let cities=[]
     for(let i=0;i<n;i++){
         cities.push(i)
     }
     //console.log(cities)
     let distance=[]
     for(let i=0;i<cities.length;i++){
         //console.log(cities[i],"c[i]")
         if(c.includes(cities[i])){
             distance.push(0)
         }else{
             let x= check(cities[i],c)
             distance.push(x)
         }
     //console.log(distance,"distance")
     }
    return Math.max(...distance)
    }
    function check(y,station){
        //console.log(y,"y",station,"station")
        let comp=[]
        for(let i=0;i<station.length;i++){
            let diff=Math.abs(y-station[i])
            //console.log(diff,"diffe")
            comp.push(diff)
        }
        return Math.min(...comp)
    }
    flatlandSpaceStations(5,[0,4])//2
    