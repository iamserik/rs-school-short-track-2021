/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
// function renameFiles(names) {
//   for (let i = 0; i < names.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if(names[i] === names[j]) {
//         names[i] += `(${1})`;
//       }
//     }
//   }

//   return names;

//   names.map(name => {
//     const reg = name.match(/1+$/);
//     if (reg) {
//       let nums = reg[0].split('').map(num => parseInt(num)).reduce((a, b) => a + b, 0);
//       return name.replace(reg[0], `(${nums})`)
//     }
//     return name;
//   })
// }

// console.log(renameFiles(["file", "file", "image", "file(1)", "file"]));

function renameFiles(/* names */) {
  throw new Error('Not implemented');
}

module.exports = renameFiles;
