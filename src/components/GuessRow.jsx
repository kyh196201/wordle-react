import WordRow from './WordRow';
import LetterBox from './LetterBox';

export default function GuessRow({ guess = [] }) {
  return (
    <WordRow>
      {guess.map((word, index) => (
        <LetterBox key={index} letter={word.letter} status={word.status} />
      ))}
    </WordRow>
  );
}
