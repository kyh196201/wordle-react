import styled from '@emotion/styled';

import { KEYS } from '@/constants/settings';

// import KEYBOARD_KEYS from '@/constants/keyboard';

import { getStatuses } from '@/utils/word-utils';
import KeyBoardButton from './KeyBoardButton';

const Container = styled.div({
  padding: '6px',
});

const Row = styled.div({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'nowrap',
  width: '100%',
  margin: '0 0 6px',

  '&:last-child': {
    marginBottom: '0',
  },
});

export default function KeyBoard({
  disabled,
  guesses,
  question,
  onChar,
  onEnter,
  onDelete,
}) {
  const buttonStatuses = getStatuses(guesses, question);

  return (
    <Container>
      <Row>
        {['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'].map(
          (letter, letterIndex) => (
            // 글자
            <KeyBoardButton
              key={`letter${letterIndex}`}
              text={letter}
              status={buttonStatuses[letter]}
              disabled={disabled}
              onClick={onChar}
            />
          ),
        )}
      </Row>

      <Row>
        {['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'].map(
          (letter, letterIndex) => (
            // 글자
            <KeyBoardButton
              key={`letter${letterIndex}`}
              text={letter}
              status={buttonStatuses[letter]}
              disabled={disabled}
              onClick={onChar}
            />
          ),
        )}
      </Row>

      <Row>
        <KeyBoardButton
          text={KEYS.ENTER}
          onClick={onEnter}
          disabled={disabled}
        />

        {['z', 'x', 'c', 'v', 'b', 'n', 'm'].map((letter, letterIndex) => (
          // 글자
          <KeyBoardButton
            key={`letter${letterIndex}`}
            text={letter}
            status={buttonStatuses[letter]}
            disabled={disabled}
            onClick={onChar}
          />
        ))}

        <KeyBoardButton
          text={KEYS.BACKSPACE}
          onClick={onDelete}
          disabled={disabled}
        />
      </Row>
    </Container>
  );
}
