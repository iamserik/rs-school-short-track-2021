/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;

  for (let i = 0; i < n.toString().length; i++) {
    const newArr = n.toString().split('');
    newArr.splice(i, 1);
    const newInt = parseInt(newArr.join(''), 10);
    if (newInt > max) max = newInt;
  }

  return max;
}

module.exports = deleteDigit;
