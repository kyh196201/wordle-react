import styled from '@emotion/styled';

import Header from '@/components/Header';
import Board from './components/Board';

import { GUESS } from './fixtures/guesses';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

const Main = styled.main({
  flex: 1,
});

function App() {
  const guesses = [GUESS];

  return (
    <Container className="App">
      <Header />

      <Main>
        <Board guesses={guesses} />
      </Main>
    </Container>
  );
}

export default App;
