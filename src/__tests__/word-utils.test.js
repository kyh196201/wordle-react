import {
  getRandomWord,
  isCorrectAnswer,
  isValidWord,
  getGuessStatuses,
  getStatuses,
} from '@/utils/word-utils';

describe('getRandomWord', () => {
  it('returns a random word', () => {
    const word = getRandomWord();

    expect(word).not.toBe(undefined);
  });
});

describe('isCorrectAnswer', () => {
  it('test', () => {
    expect(isCorrectAnswer('apple', 'apple')).toBe(true);

    expect(isCorrectAnswer('', '')).toBe(false);

    expect(isCorrectAnswer('apple', 'start')).toBe(false);
  });
});

describe('isValidWord', () => {
  it('checks if it is in word dictionary', () => {
    expect(isValidWord('start')).toBeTruthy();

    expect(isValidWord('colas')).toBeTruthy();

    expect(isValidWord('aaaab')).toBeFalsy();

    expect(isValidWord('aaaac')).toBeFalsy();
  });
});

describe('getGuessStatuses', () => {
  it('test', () => {
    expect(getGuessStatuses('apple', 'apple')).toEqual([
      'correct',
      'correct',
      'correct',
      'correct',
      'correct',
    ]);

    expect(getGuessStatuses('apple', 'start')).toEqual([
      'exist',
      'miss',
      'miss',
      'miss',
      'miss',
    ]);

    expect(getGuessStatuses('beget', 'elves')).toEqual([
      'miss',
      'exist',
      'miss',
      'correct',
      'miss',
    ]);
  });
});

describe('getStatuses', () => {
  context('with guesses and question', () => {
    it('returns status of each alphabet', () => {
      const guesses = ['start', 'apple'];
      const question = 'apple';
      const expected = {
        a: 'correct',
        e: 'correct',
        s: 'miss',
        t: 'miss',
        r: 'miss',
        p: 'correct',
        l: 'correct',
      };

      expect(getStatuses(guesses, question)).toEqual(expected);
    });
  });

  context('without guesses', () => {
    it('returns empty object', () => {
      const question = 'apple';

      expect(getStatuses([], question)).toEqual({});
    });
  });

  context('without question', () => {
    it('returns empty object', () => {
      expect(getStatuses(['apple'], '')).toEqual({});
    });
  });
});
