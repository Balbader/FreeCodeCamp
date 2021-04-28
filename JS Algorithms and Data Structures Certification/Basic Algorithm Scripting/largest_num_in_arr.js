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



// Prodedural Approach
function largestOfFour(arr) {
    let results = [];
    for (let i = 0; i < arr.length; i++) {
        let largestNumber = arr[i][0];
        for (let j = 1; j < arr[i].length; j++) {
            if (arr[i][j] > largestNumber) {
                largestNumber = arr[i][j];
            }
        }
        results[i] = largestNumber;
    }

    return results;
}


// Declarative approach
function largestOfFour(arr) {
    return arr.map(function(group) {
        return group.reduce(function(prev, current) {
            return current > prev ? current : prev;
        });
    });
}


// Declarative approach #2
function largestOfFour(arr) {
    return arr.map(Function.apply.bind(Math.max, null));
}


// Recursive Approach
function largestOfFour(arr, finalArr = []) {
    return !arr.length
        ? finalArr
        : largestOfFour(arr.slice(1), finalArr.concat(Math.max(...arr[0])))
}
