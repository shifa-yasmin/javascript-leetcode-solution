/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    
    while (num >= 10) {
        let arr = num.toString().split("").map(Number);
        let sum = 0;
        
        for (let digit of arr) {
            sum += digit;
        }
        
        num = sum;
    }
    
    return num;
};

console.log(addDigits(38));