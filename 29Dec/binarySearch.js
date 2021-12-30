function binarySearch(array,start,end,target){
    if(end>=start){
        let mid=start+Math.floor((end-start)/2);
    if(array[mid]==target)
       return mid;
    if(array[mid]>target)
       return binarySearch(array,start,mid-1,target);
    if(array[mid]<target)
      return binarySearch(array,mid+1,end,target);
    }
  return "no element found"

}
let array=[1,2,3,4,5,6,7,8,9]
let start=0;
let end=array.length;
let target=8;
console.log(binarySearch(array,start,end-1,target))