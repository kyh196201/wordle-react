import { isAlphabet } from '@/utils';

describe('isAlphabet', () => {
  it('알파벳인지 확인한다.', () => {
    expect(isAlphabet('a')).toBe(true);

    expect(isAlphabet('B')).toBe(true);

    expect(isAlphabet('Enter')).toBe(false);

    expect(isAlphabet()).toBe(false);

    expect(isAlphabet('1')).toBe(false);
  });
});
