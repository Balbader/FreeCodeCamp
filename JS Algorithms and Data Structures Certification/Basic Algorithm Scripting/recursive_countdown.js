const countdown = (n) => {
    if (n < 1)
        return [];
    else {
        const counter = countdown(n - 1);
        counter.unshift(n);
        return counter;
    }
}

const rangeOfNumbers = (startNum, endNum) => {
    if (startNum == endNum)
        return [startNum];
    else {
        var arr = rangeOfNumbers(startNum, endNum - 1);
        arr.push(endNum);
        return arr;
    }
}

console.log(rangeOfNumbers(1, 5));
console.log("hello");