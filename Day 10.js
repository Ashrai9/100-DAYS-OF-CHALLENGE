//1>First line contains input N and K denoting numbers of elements and index at which elements before and after it have to be reversed.
//-8min

function subreverse(arr, n) {
    console.log(arr, n)
    let x = arr.indexOf(n)
    let y = arr.slice(0, x).reverse().concat(arr.slice(x))
    console.log(y)
}
subreverse([1, 2, 3, 4, 5, 6], 5)//4,3,2,1,5,6