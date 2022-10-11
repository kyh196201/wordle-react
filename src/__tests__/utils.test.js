import {
  getLetterBoxBackgroundColor,
  isAlphabet,
  isBackspace,
  isEnter,
  generateAlphabet,
} from '@/utils';

import { KEYS, WORD_STATUS } from '@/constants/settings';
import COLORS from '@/constants/colors';

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

describe('getLetterBoxBackgroundColor', () => {
  context('with word status', () => {
    it('returns background color code', () => {
      expect(getLetterBoxBackgroundColor(WORD_STATUS.CORRECT)).toBe(
        COLORS.CORRECT,
      );

      expect(getLetterBoxBackgroundColor(WORD_STATUS.EXIST)).toBe(COLORS.EXIST);

      expect(getLetterBoxBackgroundColor(WORD_STATUS.MISS)).toBe(COLORS.MISS);
    });
  });

  context('without word status', () => {
    it('returns white color cold', () => {
      expect(getLetterBoxBackgroundColor()).toBe(COLORS.WHITE);
    });
  });
});

describe('generateAlphabet', () => {
  it('generates alphabet array', () => {
    const expected = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
    ];

    expect(generateAlphabet()).toEqual(expected);
  });
});
