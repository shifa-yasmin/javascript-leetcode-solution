/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
       for(let i=0;i<s.length;i++){
           let res=true
           for(let j=0;j<s.length;j++){
               if(i!==j&&s[i]===s[j]){
                  res =false;
                  break;
               }
           }
           if(res){
               return i
           }
           
       }
       return -1
};
console.log(firstUniqChar("leetcode"))
console.log(firstUniqChar("loveleetcode"))
console.log(firstUniqChar("aabb"))
