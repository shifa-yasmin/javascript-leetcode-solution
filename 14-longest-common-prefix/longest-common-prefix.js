/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let final = "";

    for (let j = 0; j < strs[0].length; j++) {

        for (let i = 1; i < strs.length; i++) {

            if (strs[i][j] !== strs[0][j]) {
                return final;
            }

        }

        final += strs[0][j];
    }

    return final;
};

console.log(longestCommonPrefix(["flower","flow","flight"])); 
console.log(longestCommonPrefix(["dog","racecar","car"]));   