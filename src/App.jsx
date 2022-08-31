import styled from '@emotion/styled';

import Header from '@/components/Header';

import WordRow from '@/components/WordRow';

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

      <Main>
        <WordRow word="hello" />
        <WordRow word="plane" />
      </Main>
    </Container>
  );
}

export default App;
