import { useEffect } from 'react';

// import KEYBOARD_KEYS from '@/constants/ketboard';
import { useDispatch } from 'react-redux';

import { isAlphabet, isBackspace, isEnter } from '@/utils';

import {
  addLetterToCurrentGuess,
  addNewGuess,
  removeLetterFromCurrentGuess,
} from '@/store/guessSlice';
import { checkAnswer } from '@/store/gameSlice';

import KeyBoard from '@/components/KeyBoard';

export default function KeyBoardContainer() {
  const dispatch = useDispatch();

  // #region Event handlers
  function handleChar(key) {
    dispatch(addLetterToCurrentGuess(key));
  }

  function handleDelete() {
    dispatch(removeLetterFromCurrentGuess());
  }

  function handleEnter() {
    dispatch(addNewGuess());

    setTimeout(() => {
      dispatch(checkAnswer());
    }, 0);
  }
  // #endregion

  // bind keyup event when component mounted
  useEffect(() => {
    function handleKeyUp(event) {
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
  }, []);

  // TODO: handleKeyUp과 중복 제거
  const handleClick = (key = '') => {
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
  };

  return <KeyBoard onClick={handleClick} />;
}
