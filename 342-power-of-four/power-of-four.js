/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
        if(n===1) return true;
        if(n<=0||n%4!==0) return false;
        return isPowerOfFour(n/4)
};
console.log(isPowerOfFour(16))
console.log(isPowerOfFour(5))
console.log(isPowerOfFour(1))