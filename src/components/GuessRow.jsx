import { getGuessStatuses } from '@/utils/word-utils';

import WordRow from './WordRow';
import LetterBox from './LetterBox';

export default function GuessRow({ guess = '', question = '' }) {
  const statuses = getGuessStatuses(guess, question);

  return (
    <WordRow>
      {guess.split('').map((word, index) => (
        <LetterBox key={index} letter={word} status={statuses[index]} />
      ))}
    </WordRow>
  );
}
