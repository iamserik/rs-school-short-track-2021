/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let low = 0;
  let high = array.length - 1;
  let number = null;
  while (low <= high && number === null) {
    const mid = Math.floor((low + high) / 2);
    const guess = array[mid];
    if (guess === value) {
      number = mid;
    }
    if (guess < value) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return number;
}

module.exports = findIndex;
