import { useSelector } from 'react-redux';

import Board from '@/components/Board';

export default function BoardContainer() {
  const { currentGuess } = useSelector(state => state.guess);

  return <Board currentGuess={currentGuess} />;
}
