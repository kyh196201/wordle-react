import styled from '@emotion/styled';

import Header from '@/components/Header';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

const Main = styled.main({
  flex: 1,
});

function App() {
  return (
    <Container className="App">
      <Header />

      <Main>게임 영역</Main>
    </Container>
  );
}

export default App;
