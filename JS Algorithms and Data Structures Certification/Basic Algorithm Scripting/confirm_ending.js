/* Check if a string (first argument, str) ends with the given
 * target string (secong argument, target). */

function confirmEnding (str, target) {
    return str.slice(str.length - target.length) === target;
}

console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
console.log(confirmEnding("He has to give me a new name", "name"));
console.log(confirmEnding('balou', 'ou'));

const hasEnd = (str, target) => {
    for (let i = 0; i < target.length; i++) {
        if (str[str.length - 1 - i] !== target[target.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(hasEnd("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
console.log(hasEnd("He has to give me a new name", "name"));
console.log(hasEnd('balou', 'ou'));
