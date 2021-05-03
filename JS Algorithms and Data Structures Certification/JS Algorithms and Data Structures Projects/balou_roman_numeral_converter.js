function convertToRoman(num) {
    const decValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const romanVal = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    let romanNbr = '';

    for (let i = 0; i < decValues.length; i++) {
        while (decValues[i] <= num) {
            romanNbr += romanVal[i];
            num -= decValues[i];
        }
    }
    return romanNbr;
}

console.log(convertToRoman(36));
