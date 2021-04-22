function largestOfFour(arr) {
    let newArr = [];
    let largestNumber = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            largestNumber = Math.max(...arr[i]);
            if (j == arr[i].length)
                largestNumber == 0;
        }
        newArr.push(largestNumber);
    }
    return (newArr);
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

