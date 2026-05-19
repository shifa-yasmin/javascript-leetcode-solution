/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
   
    let res= nums.join("").split("")
    return res.map(Number)
};
console.log(separateDigits([13,25,83,77]))
console.log(separateDigits([7,1,3,9]))