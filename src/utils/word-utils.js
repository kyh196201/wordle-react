import { WORD_STATUS } from '@/constants/settings';
import WORDS from '@/constants/wordList';

export function computeGuess(guess = '', answerString = '') {
  const result = [];

  if (guess.length !== answerString.length) {
    return result;
  }

  const answer = answerString.split('');

  const guessAsArray = guess.split('');

  const answerLetterCount = {};

  // alternative approaches to this logic
  // https://github.com/rauchg/wordledge/blob/main/pages/_middleware.ts#L46-L69

  guessAsArray.forEach((letter, index) => {
    const currentAnswerLetter = answer[index];

    answerLetterCount[currentAnswerLetter] = answerLetterCount[
      currentAnswerLetter
    ]
      ? answerLetterCount[currentAnswerLetter] + 1
      : 1;

    let wordStatus = '';

    if (currentAnswerLetter === letter) {
      wordStatus = WORD_STATUS.CORRECT;
    } else if (answer.includes(letter)) {
      wordStatus = WORD_STATUS.EXIST;
    } else {
      wordStatus = WORD_STATUS.MISS;
    }

    result.push({
      letter,
      status: wordStatus,
    });
  });

  result.forEach((curResult, resultIndex) => {
    if (curResult.status !== WORD_STATUS.EXIST) {
      return;
    }

    const guessLetter = guessAsArray[resultIndex];

    answer.forEach((currentAnswerLetter, answerIndex) => {
      if (currentAnswerLetter !== guessLetter) {
        return;
      }

      if (result[answerIndex].status === WORD_STATUS.CORRECT) {
        result[resultIndex].status = WORD_STATUS.MISS;
      }

      if (answerLetterCount[guessLetter] <= 0) {
        result[resultIndex].status = WORD_STATUS.MISS;
      }
    });

    answerLetterCount[guessLetter] -= 1;
  });

  return result;
}

export function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * WORDS.length);

  return WORDS[randomIndex];
}

/**
 * 제출한 정답이 주어진 문제와 일치하는지 여부 반환
 *
 * @param {*} guess 입력한 정답
 * @param {*} question 현재 문제
 * @returns 일치할 경우 true, 다를 경우 false
 */
export function isCorrectAnswer(guess = '', question = '') {
  if (!guess.length) return false;

  const guessResult = computeGuess(guess, question);

  return guessResult.every(word => word.status === WORD_STATUS.CORRECT);
}

const inValidWords = new Set([]);

export function isValidWord(word = '') {
  if (inValidWords.has(word)) {
    return false;
  }

  if (WORDS.includes(word)) {
    return true;
  }

  inValidWords.add(word);

  return false;
}

export default {};
