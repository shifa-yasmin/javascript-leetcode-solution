/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
       let res= s.split(" ").filter(n=>n!=="");
      return res[res.length-1].length
};
console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("   fly me   to   the moon  "))
console.log(lengthOfLastWord("luffy is still joyboy"))