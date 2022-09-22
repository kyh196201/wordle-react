import { WORD_STATUS } from '@/constants/settings';

export const GUESS = [
  {
    letter: 'a',
    status: WORD_STATUS.CORRECT,
  },
  {
    letter: 'p',
    status: WORD_STATUS.EXIST,
  },
  {
    letter: 'p',
    status: WORD_STATUS.EXIST,
  },
  {
    letter: 'l',
    status: WORD_STATUS.MISS,
  },
  {
    letter: 'e',
    status: WORD_STATUS.CORRECT,
  },
];

export const CORRECT_GUESS = [
  {
    letter: 'a',
    status: WORD_STATUS.CORRECT,
  },
  {
    letter: 'p',
    status: WORD_STATUS.CORRECT,
  },
  {
    letter: 'p',
    status: WORD_STATUS.CORRECT,
  },
  {
    letter: 'l',
    status: WORD_STATUS.CORRECT,
  },
  {
    letter: 'e',
    status: WORD_STATUS.CORRECT,
  },
];

export default {};
