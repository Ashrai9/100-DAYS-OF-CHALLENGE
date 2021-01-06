//1>Maximum Sum Path
//Given two sorted arrays such the arrays may have some common elements. Find the sum of the maximum sum path to reach from beginning of any array to end of any of the two arrays. We can switch from one array to another array only at common elements.
function maxPathSum(arr1,arr2,m,n){
    let i=0
    let j=0
    let result=0
    let sum1=0
    let sum2=0
    //let first=before(arr1,arr2,m,n,i,j)
    
  while(i<m&&j<n){
    if(arr1[i]<arr2[j]){
      console.log(arr1[i])
      sum1+=arr1[i]//2 3
      i+=1
    }else if(arr1[i]>arr2[j]){
      console.log(arr2[j])
      sum2+=arr2[j]//1 5
      j+=1
    }else{
      console.log(sum1,sum2)
    result+=Math.max(sum1,sum2)
    console.log(result,"re")
    sum1=0
    sum2=0
    let temp=i
    while(i<m && arr1[i]==arr2[j]){
      sum1+=arr1[i]
      i++
    }
    while(j<n && arr1[temp]==arr2[j]){
      sum2+=arr2[j]
      j++
    }
    result+=Math.max(sum1,sum2)
    }
  }
    sum1=0
    sum2=0
    while(i<m){
      sum1+=arr1[i]
      i++
    }
    while(j<n){
      sum2+=arr2[j]
      j++
    }
    result+=Math.max(sum1,sum2)
    
    return result
  }
  //maxPathSum([2, 3, 7, 10, 12, 15, 30, 34],[1, 5, 7, 8, 10, 15, 16, 19],8,8)
  maxPathSum([2, 3, 7, 10, 12],[1, 5, 7, 8],5,4)