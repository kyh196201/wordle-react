import {
  getRandomWord,
  isCorrectAnswer,
  isValidWord,
  getGuessStatuses,
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
