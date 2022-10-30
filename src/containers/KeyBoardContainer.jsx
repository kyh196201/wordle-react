import { useEffect } from 'react';

// import KEYBOARD_KEYS from '@/constants/ketboard';
import { useDispatch, useSelector } from 'react-redux';

import { isAlphabet, isBackspace, isEnter } from '@/utils';

import {
  addLetterToCurrentGuess,
  addNewGuess,
  removeLetterFromCurrentGuess,
  guessesSelector,
} from '@/store/guessSlice';

import {
  checkAnswer,
  selectIsGameOver,
  selectQuestion,
} from '@/store/gameSlice';

import KeyBoard from '@/components/KeyBoard';

export default function KeyBoardContainer() {
  const guesses = useSelector(guessesSelector);
  const question = useSelector(selectQuestion);
  const isGameOver = useSelector(selectIsGameOver);

  const dispatch = useDispatch();

  // #region Event handlers
  const handleChar = key => {
    dispatch(addLetterToCurrentGuess(key));
  };

  const handleDelete = () => {
    dispatch(removeLetterFromCurrentGuess());
  };

  const handleEnter = () => {
    dispatch(addNewGuess());

    setTimeout(() => {
      dispatch(checkAnswer());
    }, 0);
  };
  // #endregion

  // bind keyup event when component mounted
  useEffect(() => {
    function handleKeyUp(event) {
      if (isGameOver) return;

      const { key } = event;

      if (isAlphabet(key)) {
        handleChar(key);
        return;
      }

      if (isBackspace(key)) {
        handleDelete();
        return;
      }

      if (isEnter(key)) {
        handleEnter();
      }
    }

    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [isGameOver]);

  return (
    <KeyBoard
      disabled={isGameOver}
      guesses={guesses}
      question={question}
      onChar={handleChar}
      onEnter={handleEnter}
      onDelete={handleDelete}
    />
  );
}
