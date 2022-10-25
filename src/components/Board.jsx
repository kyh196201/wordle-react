import styled from '@emotion/styled';

import { MAX_CHANCES } from '@/constants/settings';
import MEDIA_QUERIES from '@/constants/media-queries';

import GuessRow from './GuessRow';
import InputRow from './InputRow';
import EmptyRow from './EmptyRow';

const Container = styled.div({
  width: '250px',
  fontSize: '24px',

  [MEDIA_QUERIES[0]]: {
    width: '280px',
  },

  [MEDIA_QUERIES[1]]: {
    width: '350px',
    fontSize: '28px',
  },

  [MEDIA_QUERIES[2]]: {
    width: '400px',
    fontSize: '32px',
  },
});

export default function Board({
  guesses = [],
  currentGuess = '',
  question = '',
}) {
  const emptyLength =
    currentGuess.length > 0
      ? MAX_CHANCES - guesses.length - 1
      : MAX_CHANCES - guesses.length;

  const empties = emptyLength > 0 ? Array.from(Array(emptyLength)) : [];

  return (
    <Container className="board">
      {/* 입력완료된 rows */}
      {guesses.map((guess, index) => (
        <GuessRow key={`guess-${index}`} guess={guess} question={question} />
      ))}

      {/* 현재 입력중인 row */}
      {currentGuess.length > 0 && <InputRow input={currentGuess} />}

      {/* 빈 rows */}
      {empties.map((_, index) => (
        <EmptyRow key={`empty${index}`} />
      ))}
    </Container>
  );
}
