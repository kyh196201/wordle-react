import { MAX_WORD_LENGTH } from '@/constants/settings';

import LetterBox from '@/components/LetterBox';

export default function WordRow({ word = '' }) {
  const lettersRemaining = MAX_WORD_LENGTH - word.length;

  const letters = word.split('').concat(Array(lettersRemaining).fill(''));

  return (
    <div>
      {letters.map((letter, index) => (
        <LetterBox key={`${letter}${index}`} letter={letter} />
      ))}
    </div>
  );
}
