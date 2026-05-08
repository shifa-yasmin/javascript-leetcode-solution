/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
let count=0;
for(let ch of t){
    count+=ch.charCodeAt(0)
}
for(let ch of s){
    count-=ch.charCodeAt(0)
}
return String.fromCharCode(count)
};

console.log(findTheDifference("abcd","abcde"))
console.log(findTheDifference("","y"))