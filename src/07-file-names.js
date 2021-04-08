/**
 * There's a list of file, since two files cannot have equal arr,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of arr that will be given to the files.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const arr = names;
  const uniqNames = Array.from(new Set(arr));
  const changedNames = [];
  for (let i = 0; i < arr.length; i++) {
    const piece = arr.slice(0, i);
    if (uniqNames.includes(arr[i]) && changedNames.includes(arr[i])) {
      arr[i] += `(${1})`;
      changedNames.push(arr[i]);
    }

    while (piece.includes(arr[i])) {
      if (changedNames.includes(arr[i])) {
        const fName = arr[piece.indexOf(arr[i])];
        const reg = fName.match(/\(\d+\)$/);
        const number = parseInt(reg[0][1], 0);
        const nameArr = arr[i].split('');
        nameArr[reg.index + 1] = (number + 1);
        arr[i] = nameArr.join('');
        changedNames.push(arr[i]);
      } else {
        arr[i] += `(${1})`;
        changedNames.push(arr[i]);
      }
    }
  }

  return arr;
}

module.exports = renameFiles;
