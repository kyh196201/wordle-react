import styled from '@emotion/styled';

const StyledHeader = styled.header({
  display: 'flex',
  justifyContent: 'flex-start',
  padding: '0 1.6rem',
  borderBottom: '1px solid #d3d6da',
});

const Logo = styled.h1({
  textAlign: 'center',
  lineHeight: '4rem',
  fontSize: '2.8rem',
  fontWeight: '700',
});

export default function Header() {
  return (
    <StyledHeader>
      <Logo>Wordle</Logo>
    </StyledHeader>
  );
}
