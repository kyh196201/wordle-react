import styled from '@emotion/styled';

const Row = styled.div({
  display: 'flex',
});

export default function WordRow({ children }) {
  return <Row className="row">{children}</Row>;
}
