import styled from '@emotion/styled';

const Row = styled.div({
  display: 'flex',
  margin: '0 -5px 5px',

  '&:last-of-type': {
    marginBottom: 0,
  },
});

export default function WordRow({ children }) {
  return <Row className="row">{children}</Row>;
}
