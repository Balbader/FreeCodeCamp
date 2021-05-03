/*
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
*/

function findLetter(str) {
    for (let i = 0; i < str.length; i++) {
        /* code of current character */
        const code = str.charCodeAt(i);

        /* if code of current character is not equal to first character + no of iteration
        hence character has been escaped */
        if (code !== str.charCodeAt(0) + i) {
            /* if current character has escaped one character find previous char and return */
            return String.fromCharCode(code - 1);
        }
    }
    return undefined;
}

console.log(findLetter('abce'));


// Variation 1
function fearNotLetter(str) {
    var compare = str.charCodeAt(0),
        missing;

    str.split("").map(function(letter, index) {
        if (str.charCodeAt(index) == compare) {
            ++compare;
        } else {
            missing = String.fromCharCode(compare);
        }
    });

    return missing;
}


// Variation 2
function fearNotLetter(str) {
    for (let i = 1; i < str.length; ++i) {
        if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
            return String.fromCharCode(str.charCodeAt(i - 1) + 1);
        }
    }
}
