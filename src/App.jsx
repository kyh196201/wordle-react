import styled from '@emotion/styled';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '@/components/Header';
import BoardContainer from './containers/BoardContainer';

import { setAnswer } from './store/gameSlice';
import { getRandomWord } from './utils/word-utils';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

const Main = styled.main({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
});

function App() {
  const dispatch = useDispatch();
  const answer = useSelector(state => state.game.answer);

  useEffect(() => {
    const randomAnswer = getRandomWord();
    dispatch(setAnswer(randomAnswer));
  }, [dispatch]);

  return (
    <Container className="App">
      <Header />

      {answer}

      <Main>
        <BoardContainer />
      </Main>
    </Container>
  );
}

export default App;
