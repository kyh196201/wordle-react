import { useSelector } from 'react-redux';

import { currentGuessSelector, guessesSelector } from '@/store/guessSlice';
import { selectQuestion } from '@/store/gameSlice';

import Board from '@/components/Board';

export default function BoardContainer() {
  const currentGuess = useSelector(currentGuessSelector);
  const guesses = useSelector(guessesSelector);
  const question = useSelector(selectQuestion);

  return (
    <Board currentGuess={currentGuess} guesses={guesses} question={question} />
  );
}
