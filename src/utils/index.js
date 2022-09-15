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

export default {};
