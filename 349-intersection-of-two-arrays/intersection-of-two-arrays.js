/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let res=[];
  for(i=0;i<nums1.length;i++){
    if(nums2.includes(nums1[i])&&!res.includes(nums1[i])){
        res.push(nums1[i])
    }
  }
  return res
};
console.log(intersection([1,2,2,1],[2,2]))
console.log(intersection([4,9,5],[9,4,9,8,4]))