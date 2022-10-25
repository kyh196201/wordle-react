import { computeGuess } from '@/utils/word-utils';

import WordRow from './WordRow';
import LetterBox from './LetterBox';

export default function GuessRow({ guess = '', question = '' }) {
  const computedGuess = computeGuess(guess, question);

  return (
    <WordRow>
      {computedGuess.map((word, index) => (
        <LetterBox key={index} letter={word.letter} status={word.status} />
      ))}
    </WordRow>
  );
}
