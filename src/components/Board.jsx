import styled from '@emotion/styled';

import { MAX_CHANCES } from '@/constants/settings';

import GuessRow from './GuessRow';
import InputRow from './InputRow';
import EmptyRow from './EmptyRow';

const breakpoints = [360, 768, 1200];
const mediaQueries = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

const Container = styled.div({
  width: '250px',
  fontSize: '24px',

  [mediaQueries[0]]: {
    width: '300px',
  },

  [mediaQueries[1]]: {
    width: '350px',
    fontSize: '28px',
  },

  [mediaQueries[2]]: {
    width: '400px',
    fontSize: '32px',
  },
});

export default function Board({ guesses = [], currentGuess = '' }) {
  const guessesLength = guesses.length;
  const emptyLength =
    currentGuess.length > 0
      ? MAX_CHANCES - guessesLength - 1
      : MAX_CHANCES - guessesLength;

  return (
    <Container className="board">
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
    </Container>
  );
}
