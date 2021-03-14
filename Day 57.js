//telephone validator using regex-freecodecamp
function telephoneCheck(str) {
    let regex=/^[1\s+]*?(([0-9]{3})|(\([0-9]{3}\)))?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/gm
    return regex.test(str)
    }
    
    telephoneCheck("555-555-5555");// true

    //1>The love mystery
    function theLoveLetterMystery(s) {
        console.log(s.length,"s")
        let last=s.length-1
        let count=0
      for(let i=0;i<=s.length-1;i++){
      if(i<last){
        count+=Math.abs(s.charCodeAt(last)-s.charCodeAt(i))
        console.log(count,"c")
      }
      last--
      }
      return count
      }
      theLoveLetterMystery("abc")//2
      