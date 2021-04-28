/*
We')ll pass you an array of two numbers. Return the sum of those two numbers
plus the sum of all the numbers between them. The lowest number will not always
come first.
For example, sumAll([4,1]) should return 10 because sum of all the numbers
between 1 and 4 (both inclusive) is 10.
*/

function sumAll(arr) {
    let x = arr[0];
    let y = arr[arr.length - 1];
    let count = 0;
    if (x < y) {
        for (let i = x; i <= y; i++) {
            count += i;
        }
        return (count);
    }
    if (x > y) {
        for (let i = y; i <= x; i++) {
            count += i;
        }
        return (count);
    }
}

// Variation 1
function sumAll(arr) {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let sumBetween = 0;
  for (let i = min; i <= max; i++) {
    sumBetween += i;
  }
  return sumBetween;
}


// Variation 2
const sumAll = arr => {
  // Buckle up everything to one!
  const startNum = arr[0];
  const endNum = arr[1];

  // Get the count of numbers between the two numbers by subtracting them and add 1 to the absolute value.
  // ex. There are |1-4| + 1 = 4, (1, 2, 3, 4), 4 numbers between 1 and 4.
  const numCount = Math.abs(startNum - endNum) + 1;

  // Using Arithmetic Progression summing formula
  const sum = ((startNum + endNum) * numCount) / 2;
  return sum;
};


// Variation 3
function sumAll(arr) {
  let sumBetween = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sumBetween += i;
  }
  return sumBetween;
}


// Variation 4
function sumAll(arr) {
  const [first, last] = [...arr].sort((a, b) => a - b);
  return first !== last
    ? first + sumAll([first + 1, last])
    : first;
}
