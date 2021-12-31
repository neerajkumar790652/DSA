function binary(array,start,end,target){
    while(start<=end){
        let mid=start+(Math.floor(end-start)/2);
        if(mid==target){
            return mid;
        }
        else if(array[mid]>target){
            end=mid-1;
        }
        else{
            start=mid+1;
        }
    }
}
let array=[1,2,3,4,5,6,7,8,9]
let target=6;
let start=0;
let end=array.length;
console.log(binary(array,start,end,target))
