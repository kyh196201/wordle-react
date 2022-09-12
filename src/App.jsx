import styled from '@emotion/styled';

import Header from '@/components/Header';
import BoardContainer from './containers/BoardContainer';

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
        <BoardContainer />
      </Main>
    </Container>
  );
}

export default App;
