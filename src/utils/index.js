import COLORS from '@/constants/colors';
import { KEYS } from '@/constants/settings';

export function isAlphabet(str = '') {
  if (str.length > 1 || !str.length) {
    return false;
  }

  const regex = /^[a-zA-Z]$/i;

  return regex.test(str);
}

export function isBackspace(key = '') {
  return key === KEYS.BACKSPACE;
}

export function isEnter(key = '') {
  return key === KEYS.ENTER;
}

export function getLetterBoxBackgroundColor(wordStatus = '') {
  return COLORS[wordStatus.toUpperCase()] ?? COLORS.WHITE;
}

export default {};
