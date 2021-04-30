/*Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.*/

function spinalCase(str) {
    return str
        .split(/\s|_|(?=[A-Z])/) // split str if one of the three condition is encountered: [\s] [_] [?=A-Z]
        .join('-'
        .toLowerCase();
}

console.log(spinalCase('This is Spinal Tap'));
console.log(spinalCase('ThisIsSpinalTap'));
console.log(spinalCase('The_Andy_Griffith_Show'));
console.log(spinalCase('AllThe-small Things'));
