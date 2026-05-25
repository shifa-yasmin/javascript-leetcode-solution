/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
      let res = s.split(" ");
      let final=""
    for(let i=0;i<k;i++){
         final+=res[i]+" "
       
    }
    return final.trim()
};
console.log(truncateSentence("Hello how are you Contestant",4))
console.log(truncateSentence("What is the solution to this problem",4))
console.log(truncateSentence("chopper is not a tanuki",5))