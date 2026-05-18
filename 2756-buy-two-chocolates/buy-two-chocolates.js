/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
     let res= prices.sort((a,b)=>a-b);
       let c=res[0]+res[1];
        if(c<=money){
            return money-c;
        }
        return money
};
console.log(buyChoco([1,2,2],3))
console.log(buyChoco([3,2,3],3))

