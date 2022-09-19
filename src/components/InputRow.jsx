import { MAX_WORD_LENGTH } from '@/constants/settings';

import LetterBox from '@/components/LetterBox';
import WordRow from './WordRow';

export default function InputRow({ input = '' }) {
  const lettersRemaining = MAX_WORD_LENGTH - input.length;

  const letters = input.split('').concat(Array(lettersRemaining).fill(''));

  return (
    <WordRow>
      {letters.map((letter, index) => (
        <LetterBox key={`${letter}${index}`} letter={letter} />
      ))}
    </WordRow>
  );
}
