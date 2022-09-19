import { MAX_CHANCES } from '@/constants/settings';

import GuessRow from './GuessRow';
import InputRow from './InputRow';
import EmptyRow from './EmptyRow';

export default function Board({ guesses = [], currentGuess = '' }) {
  const guessesLength = guesses.length;
  const emptyLength =
    currentGuess.length > 0
      ? MAX_CHANCES - guessesLength - 1
      : MAX_CHANCES - guessesLength;

  return (
    <div>
      {/* 추측 rows */}
      {guessesLength > 0 &&
        guesses.map((guess, index) => (
          <GuessRow key={`guess-${index}`} guess={guess} />
        ))}

      {/* 현재 입력중인 row */}
      {currentGuess.length > 0 && <InputRow input={currentGuess} />}

      {/* 빈 rows */}
      {emptyLength > 0 &&
        [...Array(emptyLength).keys()].map(key => (
          <EmptyRow key={`empty${key}`} />
        ))}
    </div>
  );
}
