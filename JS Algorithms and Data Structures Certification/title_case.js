/*
Return the provided string with the first letter of each word capitalized.
Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words
like the and of.
*/

function titleCase(str) {
    let newStr = str.toLowerCase();
    return newStr.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
}
