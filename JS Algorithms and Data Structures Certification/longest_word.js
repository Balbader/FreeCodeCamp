function longestWord(str) {
    let count = 0;
    let longest = 0;
    let arr = str.split(' ');
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i] >= 'a' && arr[i] <= 'z'
                || arr[i] >= 'A' && arr[i] <= 'Z') {
                count++;
            }
        }
        if (count > longest) {
            longest = count;
        }
        count = 0;
    }
    return (longest);
}


// Variation 1
function findLongestWordLength(str) {
  let words = str.split(' ');
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  return maxLength;
}


// Using reduce
function findLongestWordLength(s) {
  return s.split(' ')
    .reduce(function(longest, word) {
      return Math.max(longest, word.length)
    }, 0);
}


// Using Map
function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map(word => word.length));
}


function findLongestWordLength(str) {
  // split the string into individual words
  const words = str.split(" ");

  // words only has 1 element left that is the longest element
  if (words.length == 1) {
    return words[0].length;
  }

  // if words has multiple elements, remove the first element
  // and recursively call the function
  return Math.max(
    words[0].length,
    findLongestWordLength(words.slice(1).join(" "))
  );
}
