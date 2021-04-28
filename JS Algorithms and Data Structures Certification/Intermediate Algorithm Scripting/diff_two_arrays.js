/*
Compare two arrays and return a new array with any items only found in one of
the two given arrays, but not both. In other words, return the symmetric
difference of the two arrays.
Note: You can return the array with its elements in any order.
*/


/*
function diffArray(arr1, arr2) {
    const x = Math.max(arr1.length, arr2.length);
    const newArr = arr1.concat(arr2);
    for (let i = 0; i < x; i++) {
        if (arr1[i] === arr2[i]) {
            continue ;
        } else if (!arr1.includes(arr1[i]) || !arr2.includes(arr2[i])){
            newArr.push(arr1[i]);
        }
    }
    console.log(newArr)
}
*/

function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

// Variation 1
function diffArray(arr1, arr2) {
  var newArr = [];

  function onlyInFirst(first, second) {
    // Looping through an array to find elements that don't exist in another array
    for (var i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        // Pushing the elements unique to first to newArr
        newArr.push(first[i]);
      }
    }
  }

  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);

  return newArr;
}


// Variation 2
function diffArray(arr1, arr2) {
  return [...diff(arr1, arr2), ...diff(arr2, arr1)];

  function diff(a, b) {
    return a.filter(item => b.indexOf(item) === -1);
  }
}
