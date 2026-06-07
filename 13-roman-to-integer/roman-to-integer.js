/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function(s) {
    const res = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let total = 0;

    for (let i = 0; i < s.length; i++) {
        if (res[s[i]] < res[s[i + 1]]) {
            total -= res[s[i]];
        } else {
            total += res[s[i]];
        }
    }

    return total;
};

console.log(romanToInt("III"));     
console.log(romanToInt("LVIII"));    
console.log(romanToInt("MCMXCIV"));  