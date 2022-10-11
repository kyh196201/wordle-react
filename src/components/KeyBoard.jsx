import styled from '@emotion/styled';

import KEYBOARD_KEYS from '@/constants/keyboard';

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

export default function KeyBoard({ onClick }) {
  // TODO 키보드 상태구하는 custom hook

  return (
    <Container>
      {KEYBOARD_KEYS.map((keyboardRow, index) => (
        // 키보드 행
        <Row key={`row${index}`}>
          {keyboardRow.map((letter, letterIndex) => (
            // 글자
            <KeyBoardButton
              key={`letter${letterIndex}`}
              text={letter}
              onClick={onClick}
            />
          ))}
        </Row>
      ))}
    </Container>
  );
}
