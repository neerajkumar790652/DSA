const intersection=(nums1,nums2)=>{
    let inter=[];
    const setnums1=new Set(nums1);
    const setnums2=new Set(nums2);
    if(setnums1.length<setnums2.length){
        [setnums1,setnums2]=[setnums2,setnums1]
    }
    setnums1.forEach(num => {
        if(setnums2.has(num)){
            inter.push(num)
        }

        
    });
return inter;
}
let nums1=[1,2,3,4,5,6];
let nums2=[4,5,6];
console.log(intersection(nums1,nums2));