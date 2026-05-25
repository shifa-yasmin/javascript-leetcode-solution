/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let res=""
    for(let a of address){
       if(a==="."){
          res+="[.]"
       }else{
           res+= a
       }
    }
    return res
}
console.log(defangIPaddr( "1.1.1.1"))
console.log(defangIPaddr("255.100.50.0"))