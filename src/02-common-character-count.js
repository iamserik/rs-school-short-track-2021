/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const res = [];
  const fArr = s1.split('');
  const sArr = s2.split('');
  for (let i = 0; i < fArr.length; i++) {
    const currentEl = fArr[i];
    if (sArr.includes(currentEl)) {
      sArr.splice(sArr.indexOf(currentEl), 1);
      res.push(currentEl);
    }
  }
  return res.length;
}

module.exports = getCommonCharacterCount;
