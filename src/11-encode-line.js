/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(s) {
  if (s.length === 0) return '';
  const arr = s.split('');
  const res = [];
  let iArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (iArr.includes(arr[i])) {
      iArr.push(arr[i]);
    } else if (iArr.length === 0) {
      iArr.push(arr[i]);
    } else {
      res.push(iArr);
      iArr = [];
      iArr.push(arr[i]);
    }
  }
  res.push(iArr);
  return res.map((el) => {
    const suff = el.length !== 1 ? el.length : '';
    return suff + el[0];
  }).reduce((a, b) => a + b, '');
}

module.exports = encodeLine;
