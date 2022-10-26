import { WORD_STATUS } from '@/constants/settings';
import WORDS from '@/constants/wordList';

export function getGuessStatuses(guess = '', question = '') {
  const splitQuestion = question.split('');
  const splitGuess = guess.split('');

  // eslint-disable-next-line no-unused-vars
  const solutionCharsTaken = splitQuestion.map(_ => false);

  const statuses = Array.from(Array(guess.length));

  // handle all correct cases first
  splitGuess.forEach((letter, i) => {
    if (letter === splitQuestion[i]) {
      statuses[i] = WORD_STATUS.CORRECT;
      solutionCharsTaken[i] = true;
    }
  });

  splitGuess.forEach((letter, i) => {
    if (statuses[i]) return;

    if (!splitQuestion.includes(letter)) {
      // handles the absent case
      statuses[i] = WORD_STATUS.MISS;
      return;
    }

    // now we are left with "present"s
    const indexOfPresentChar = splitQuestion.findIndex(
      (x, index) => x === letter && !solutionCharsTaken[index],
    );

    if (indexOfPresentChar > -1) {
      statuses[i] = WORD_STATUS.EXIST;
      solutionCharsTaken[indexOfPresentChar] = true;
    } else {
      statuses[i] = WORD_STATUS.MISS;
    }
  });

  return statuses;
}

// guesses = ['start']
// question = 'apple'
export function getStatuses(guesses = [], question = '') {
  if (!guesses.length || !question) return {};

  const charObj = {};

  const splitQuestion = question.split('');

  guesses.forEach(guess => {
    const splitGuess = guess.split('');

    splitGuess.forEach((letter, index) => {
      // out
      if (!splitQuestion.includes(letter)) {
        charObj[letter] = WORD_STATUS.MISS;
        return;
      }

      if (letter === splitQuestion[index]) {
        charObj[letter] = WORD_STATUS.CORRECT;
        return;
      }

      if (charObj[letter] !== 'correct') {
        charObj[letter] = WORD_STATUS.EXIST;
      }
    });
  });

  return charObj;
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

  const statuses = getGuessStatuses(guess, question);

  return statuses.every(status => status === WORD_STATUS.CORRECT);
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
