function GCD(nums1,nums2) {
    while (nums1!=nums2) {
        if (nums1>nums2) {
            return GCD(nums1-nums2,nums2);
        }else {
            return GCD(nums1,nums2-nums1);
        }
    }
    return nums1;
}
console.log (GCD(2,5));