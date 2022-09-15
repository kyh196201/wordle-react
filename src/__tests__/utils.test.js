import { isAlphabet, isBackspace, isEnter } from '@/utils';

import { KEYS } from '@/constants/settings';

describe('isAlphabet', () => {
  it('checks if key is a alphabet', () => {
    expect(isAlphabet('a')).toBe(true);

    expect(isAlphabet('B')).toBe(true);

    expect(isAlphabet('Enter')).toBe(false);

    expect(isAlphabet()).toBe(false);

    expect(isAlphabet('1')).toBe(false);
  });
});

describe('isBackspace', () => {
  it('checks if key is a Backspace', () => {
    expect(isBackspace(KEYS.BACKSPACE)).toBe(true);

    expect(isBackspace('Backspace')).toBe(true);

    expect(isBackspace(KEYS.ENTER)).toBe(false);

    expect(isBackspace('123')).toBe(false);

    expect(isBackspace()).toBe(false);
  });
});

describe('isEnter', () => {
  it('checks if key is a Enter', () => {
    expect(isEnter(KEYS.ENTER)).toBe(true);

    expect(isEnter('Enter')).toBe(true);

    expect(isEnter(KEYS.BACKSPACE)).toBe(false);

    expect(isEnter('123')).toBe(false);

    expect(isEnter()).toBe(false);
  });
});
