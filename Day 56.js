// convert number to roman number
function convertToRoman(num){
    var numValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanNum = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I"
    ];
  
  let result=""
  for(let i=0;i<numValue.length;i++){
    while(numValue[i]<=num){
      result+=romanNum[i]
      num=num-numValue[i]
    }
  }
  return result
  }
  convertToRoman(36);//XXXVI

  2>>function rot13(str) {
    //console.log(str.split(""))
    str=str.split("")
    let result=""
    let arr="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    arr=arr.split("")
    
    for(let i=0;i<str.length;i++){
    if(arr.includes(str[i])){
      let x= (arr.indexOf(str[i])+13)%26
      result+=arr[x]
    }else{
      result+=str[i]
    }
    }
    return result
    
    }
    
    rot13("SERR CVMMN!");//FREE PIZZA!