export const MAX_WORD_LENGTH = 5;

export const MAX_CHANCES = 6;

export const WORD_STATUS = {
  EXIST: 'exist', // 글자가 존재함
  CORRECT: 'correct', // 위치, 글자 모두 맞아
  MISS: 'miss', // 글자가 없음
};

export const KEYS = {
  ENTER: 'Enter',
  BACKSPACE: 'Backspace',
};

export const MESSAGES = {
  GAMEOVER: '다음 기회에.. 😂',
  SUCCESS: '정답입니다! 🎉',
  NOT_ENOUGH_WORD: '단어를 모두 입력해주세요! 👀',
  INVALID_WORD: '존재하지 않는 단어입니다. 😣',
};

export default {};
