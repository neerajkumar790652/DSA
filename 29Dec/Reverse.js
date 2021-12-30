let num;
let reverse='';
let count;
function reversed(n){
    for(let i=0;i<n;i++){
       num=n%10;
       reverse+=num;
       count=Math.floor(n/10);
       reversed(count);
       if(count===0){
           break;
       }
    }
    return reverse;
}
 console.log(reversed(1234));