let array =[7,5,1,9,4,3,8,2];
const swap = (array,leftIndex,rightIndex)=>{
    let temp = array[leftIndex];
    array[leftIndex]=array[rightIndex];
    array[rightIndex]=temp;
}
const parition=(array,left,right)=>{
    let pivot=array[Math.floor((left+right)/2)];
    let i=left;
    let j= right;
    while(i<=j){
        while(array[i]<pivot){
            i++
        }
        while(array[j]>pivot){
            j--
        }
        if(i<=j){
            swap(array,i,j)
                i++;
                j--
            }
        }
        return i;
    }
    const quickSort=(array,left=0,right=array.length-1)=>{
        let index;
        if(array.length>1){
            index=parition(array,left,right)
        
        if(left<index-1){
            quickSort(array,left,index-1);
        }
        if(index<right){
            quickSort(array,index,right)
        }
    }
    return array;
    }
    let sortedArray=quickSort(array);
    console.log(sortedArray);
