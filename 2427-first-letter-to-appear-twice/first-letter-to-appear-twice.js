/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    return s.split("").find((a,b)=>s.indexOf(a)!==b)
};
console.log(repeatedCharacter("abccbaacz"))
console.log(repeatedCharacter("abcdd"))