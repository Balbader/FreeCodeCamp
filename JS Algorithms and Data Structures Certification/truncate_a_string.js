function truncateString(str, num) {
    const newStr = [];
    const arr = str.split('');
    if (num >= str.length)
        console.log(str);
    else {
        for (let i = 0; i < num; i++) {
            newStr.push(arr[i]);
        }
        console.log(newStr.join('') + '...');
    }
}


function slice(str, num) {
    if (num >= str.length)
        console.log(str);
    let string = str.slice(0, num);
    console.log(string + '...');
}
