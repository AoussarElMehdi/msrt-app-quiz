/* 
We want to write a code which encrypts a string of characters as follows: 
alphabets are replaced by their position in the alphabet (a -> 1, b -> 2, ...), 
digits are replaced by their 10 complements (1 -> 9, 2-> 8, ...), 
the other characters are kept as they are, and finally the result is inverted 
(for example - Input: @abc3? Output: ?7321@)
*/
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

let stringEncryption = (str) => {
    let strArray = str.split('');
    let result = "";

    for (let i = 0; i < strArray.length; i++) {
        if (!isNaN(strArray[i])) strArray[i] = 10 - parseInt(strArray[i])
        if (alphabet.includes(strArray[i])) strArray[i] = alphabet.indexOf(strArray[i].toLowerCase()) + 1
    }

    for (i = strArray.length -1 ; i >= 0; i--) {
        result += strArray[i];
    }

    return result;
}

let res = stringEncryption('hell21@');
console.log(res);