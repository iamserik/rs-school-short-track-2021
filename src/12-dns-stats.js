/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (!domains.length) return {};
  let doms = domains.map((dom) => dom.split('.').reverse().map((el) => `.${el}`));
  const reDoms = doms.map((el) => el.join(''));
  doms = doms.map((dom) => dom.map((el, index) => dom.slice(0, index + 1).join('')));
  const obj = {};
  for (let i = 0; i < reDoms.length; i++) {
    for (let j = 0; j < doms[i].length; j++) {
      if (Object.keys(obj).includes(doms[i][j])) {
        obj[doms[i][j]] += 1;
      } else {
        obj[doms[i][j]] = 1;
      }
    }
  }
  return obj;
}

module.exports = getDNSStats;
