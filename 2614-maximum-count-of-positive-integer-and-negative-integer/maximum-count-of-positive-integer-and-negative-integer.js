/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
   let count=0;
   let count1=0;
       for(let a of nums)  {
           if(a>0){
                count++;
           }else if(a<0){
               count1++;
           }
       }
       if(count>count1){
           return count;
       }else{
           return count1
       }
};
console.log(maximumCount([-2,-1,-1,1,2,3]))
console.log(maximumCount([-3,-2,-1,0,0,1,2]))
console.log(maximumCount([5,20,66,1314]))