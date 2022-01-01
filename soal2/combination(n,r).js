const product_Range = (a,b) => {
    var prd = a,i = a;

    while (i++< b) {
        prd*=i;
    }
    return prd;
}
  
const combination = (n, r) => {
    if (n == r)  {
        console.log(1);
    } else {
        r=(r < n-r) ? n-r : r;
        console.log (product_Range(r+1, n)/product_Range(1,n-r))
    }
}
  
  
  combination(6, 2)
  