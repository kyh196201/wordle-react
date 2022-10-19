import { useSelector } from 'react-redux';

import { currentGuessSelector, guessesSelector } from '@/store/guessSlice';

import Board from '@/components/Board';

export default function BoardContainer() {
  const currentGuess = useSelector(currentGuessSelector);
  const guesses = useSelector(guessesSelector);

  return <Board currentGuess={currentGuess} guesses={guesses} />;
}
