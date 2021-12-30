function average(a,i,n){
    if (i == n-1)
        return a[i];

    if (i == 0)
        return ((a[i]+average(a,i+1,n)/n));
    return (a[i]+average(a,i+1,n));
    

}
function avg(a,n){
    return average(a,0,n);
}
let a =[1,2,3,4,5,6];
let n= a.length;
console.log(avg(a,n))