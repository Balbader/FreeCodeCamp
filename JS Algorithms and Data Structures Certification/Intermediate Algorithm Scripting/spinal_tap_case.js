/*Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.*/

function spinalCase(str) {
    let newStr = '';
    newStr = str.replace(/[^a-zA-Z ]/g, '');
    newStr = newStr.replace(/([A-Z])/g, ' $1').trim();
    console.log(newStr);
}

/*
console.log(spinalCase('This is Spinal Tap'));
console.log(spinalCase('ThisIsSpinalTap'));
console.log(spinalCase('The_Andy_Griffith_Show'));
console.log(spinalCase('AllThe-small Things'));
*/
//return  str.toLowerCase().replace(/\s/g, '-');

spinalCase('This is Spinal Tap');
spinalCase('ThisIsSpinalTap');
spinalCase('The_Andy_Griffith_Show');
spinalCase('AllThe-small Things');
