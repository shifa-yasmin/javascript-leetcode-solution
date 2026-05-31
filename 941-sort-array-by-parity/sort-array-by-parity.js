/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
     let res= nums.filter((a)=>a%2==0)
     let res1=nums.filter((b)=>b%2!=0);
     return res.concat(res1)
     
};
console.log(sortArrayByParity([3,1,2,4]))
console.log(sortArrayByParity([0]))