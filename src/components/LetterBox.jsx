import styled from '@emotion/styled';

const Box = styled.span({
  display: 'flex',
  width: '6.2rem',
  height: '6.2rem',
  margin: '0 0.5rem 0.5rem 0',
  border: '1px solid #d3d6da',
  fontSize: '3.2rem',
});

export default function LetterBox({ letter = '' }) {
  return <Box className="letter-box">{letter}</Box>;
}
