/* 
Using the language of your preference, write a low-complexity function 
that takes a string as a parameter, removes digits and special characters 
and returns the reverse of the obtained string. For example: "1B?.LA" --> 'ALB'. 
*/
let str = "1B?.LA"
let cleanStr = str.replace(/[^a-zA-Z ]/g, "")
let strArray = cleanStr.split('');
let result = "";
for (let i = strArray.length - 1; i >= 0; i--) {
    result += strArray[i]
}
console.log(result)