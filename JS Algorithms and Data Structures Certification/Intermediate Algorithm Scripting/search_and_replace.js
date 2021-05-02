/*Perform a search and replace on the sentence using the arguments provided and return the new sentence.*/

function myReplace(str, before, after) {
    str.split();
    for (let i = 0; i < str.length; i++) {
        if (str[i] === before) {
            str.replace(after);
        }
    }
    console.log(str);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
