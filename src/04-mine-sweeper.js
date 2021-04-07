/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const mineField = [];

  for (let i = 0; i <= matrix.length + 1; i++) {
    mineField.push([]);
    for (let j = 0; j <= matrix[0].length + 1; j++) {
      mineField[i][j] = 0;
    }
  }

  for (let i = 1; i <= matrix.length; i++) {
    for (let j = 1; j <= matrix[0].length; j++) {
      if (matrix[i - 1][j - 1]) {
        mineField[i - 1][j - 1] += 1;
        mineField[i - 1][j] += 1;
        mineField[i - 1][j + 1] += 1;
        mineField[i][j - 1] += 1;
        mineField[i][j + 1] += 1;
        mineField[i + 1][j - 1] += 1;
        mineField[i + 1][j] += 1;
        mineField[i + 1][j + 1] += 1;
      }
    }
  }

  return mineField.filter((_, i, arr) => {
    if (i === 0) return false;
    if (i === arr.length - 1) return false;
    return true;
  }).map((el) => el.splice(1, el.length - 2));
}

module.exports = minesweeper;
