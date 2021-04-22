function repeatStringNumTimes(str, num) {
    let newStr = [];
    if (num < 0)
        return ("");
    for (let i = 0; i < num; i++) {
        newStr.push(str);
    }
    return newStr.join('');
}

console.log(repeatStringNumTimes("abc", 3));
