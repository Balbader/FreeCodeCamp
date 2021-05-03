/*
Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {
    const numDict = new Map( [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ]);

    let romNbr = '';

    // loop over numDict to find the closest key value <= to num
    for (const [nbr, letter] of numDict.entries()) {
        while (nbr <= num) {
            romNbr += letter;
            num -= nbr;
        }
    }
    return romNbr;
}

console.log(convertToRoman(36)); // XXXVI
