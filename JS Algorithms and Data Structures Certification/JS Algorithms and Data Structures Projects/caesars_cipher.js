/*
One of the simplest and most widely known ciphers is a Caesar cipher,
also known as a shift cipher. In a shift cipher the meanings of the letters
are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters
are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character
(i.e. spaces, punctuation), but do pass them on.
*/

const rot13 = (str) => {
    const startCode = 65;
    const endCode = 90;
    return str.replace(/[A-Z]/ug, (letter) => {
        let newCode = letter.charCodeAt() - 13;
        if (newCode < startCode) {
            newCode = 1 + (endCode - (startCode - newCode));
        }
        return String.fromCharCode(newCode);
    });
};
console.log(rot13("SERR PBQR PNZC"));
