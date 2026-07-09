/**
 * @param {string} s
 * @return {string}
 */

var reverseWords = function(s) {
     let a= s.split(" ").map((n)=>n.split("").reverse().join("")).join(" ");
     return a
};
console.log(reverseWords("Let's take LeetCode contest"))
console.log(reverseWords("Mr Ding"))