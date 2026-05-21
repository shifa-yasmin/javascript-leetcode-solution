/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let res="";
    for(let a of s){
        res+=a.charCodeAt(0)-96
    }
    while (k > 0) {
        let sum = 0;

        for (let num of res) {
            sum += Number(num);
        }

        res = sum.toString();
        k--;
    }

    return Number(res);
};
console.log(getLucky("iiii",1))
console.log(getLucky("leetcode",2))
console.log(getLucky("zbax", 2))