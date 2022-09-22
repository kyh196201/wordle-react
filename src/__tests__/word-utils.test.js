import { WORD_STATUS } from '@/constants/settings';
import { CORRECT_GUESS, GUESS as INCORRECT_GUESS } from '@/fixtures/guesses';

import {
  computeGuess,
  getRandomWord,
  isCorrectAnswer,
} from '@/utils/word-utils';

// https://github.com/hswolff/reacdle/blob/main/src/word-utils.test.ts
describe('computeGuess', () => {
  context('with complete guess', () => {
    it('full correct', () => {
      expect(computeGuess('boost', 'boost')).toEqual([
        {
          letter: 'b',
          status: WORD_STATUS.CORRECT,
        },
        {
          letter: 'o',
          status: WORD_STATUS.CORRECT,
        },
        {
          letter: 'o',
          status: WORD_STATUS.CORRECT,
        },
        {
          letter: 's',
          status: WORD_STATUS.CORRECT,
        },
        {
          letter: 't',
          status: WORD_STATUS.CORRECT,
        },
      ]);
    });

    it('full miss', () => {
      expect(computeGuess('guard', 'boost')).toEqual([
        {
          letter: 'g',
          status: WORD_STATUS.MISS,
        },
        {
          letter: 'u',
          status: WORD_STATUS.MISS,
        },
        {
          letter: 'a',
          status: WORD_STATUS.MISS,
        },
        {
          letter: 'r',
          status: WORD_STATUS.MISS,
        },
        {
          letter: 'd',
          status: WORD_STATUS.MISS,
        },
      ]);
    });

    it('only does one match when two letters exist', () => {
      expect(computeGuess('solid', 'boost')).toEqual([
        {
          letter: 's',
          status: WORD_STATUS.EXIST,
        },
        {
          letter: 'o',
          status: WORD_STATUS.CORRECT,
        },
        {
          letter: 'l',
          status: WORD_STATUS.MISS,
        },
        {
          letter: 'i',
          status: WORD_STATUS.MISS,
        },
        {
          letter: 'd',
          status: WORD_STATUS.MISS,
        },
      ]);
    });

    it('when 1 letter matches but guess has more of the same letter', () => {
      expect(computeGuess('allol', 'colon')).toEqual([
        {
          letter: 'a',
          status: WORD_STATUS.MISS,
        },
        {
          letter: 'l',
          status: WORD_STATUS.MISS,
        },
        {
          letter: 'l',
          status: WORD_STATUS.CORRECT,
        },
        {
          letter: 'o',
          status: WORD_STATUS.CORRECT,
        },
        {
          letter: 'l',
          status: WORD_STATUS.MISS,
        },
      ]);
    });
  });

  context('with incomplete guess', () => {
    it('returns empty array', () => {
      expect(computeGuess('so', 'boost')).toEqual([]);
    });
  });
});

describe('getRandomWord', () => {
  it('returns a random word', () => {
    const word = getRandomWord();

    expect(word).not.toBe(undefined);
  });
});

describe('isCorrectAnswer', () => {
  it('test', () => {
    expect(isCorrectAnswer(CORRECT_GUESS)).toBe(true);

    expect(isCorrectAnswer()).toBe(false);

    expect(isCorrectAnswer(INCORRECT_GUESS)).toBe(false);
  });
});
