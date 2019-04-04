function sumItems(array) {
  // Sum all the numbers in the array
  let sum = 0;
  for (item of array) {
    if (Array.isArray(item)) {
      sum += sumItems(item);
    } else {
      sum += item;
    }
  }
  return sum;
}

let arr = [[1, 2, [[3], 4]], 5, []];
console.log(sumItems(arr));
module.exports = sumItems;