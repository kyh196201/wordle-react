/**
 * 입력된 문자열이 알파벳 대/소문자 한 글자인지 여부
 *
 * @param {string} str
 * @returns 알파벳 대/소문자 여부
 */
export function isAlphabet(str = '') {
  if (str.length > 1 || !str.length) {
    return false;
  }

  const regex = /^[a-zA-Z]$/i;

  return regex.test(str);
}

export default {};
