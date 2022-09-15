import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  addLetterToCurrentGuess,
  addNewGuess,
  currentGuessSelector,
  guessesSelector,
  removeLetterFromCurrentGuess,
} from '@/store/guessSlice';

import { isAlphabet, isBackspace, isEnter } from '@/utils';

import Board from '@/components/Board';

export default function BoardContainer() {
  const dispatch = useDispatch();
  const currentGuess = useSelector(currentGuessSelector);
  const guesses = useSelector(guessesSelector);

  const showAlert = () => {
    window.alert('hhh');
  };

  const onKeyUp = event => {
    const { key } = event;

    /**
     * - key가 알파벳일 경우 (소문자 대문자 포함) => 문자 추가
     * - key가 엔터일 경우
     * - key가 백스페이스일 경우
     */
    if (isAlphabet(key)) {
      dispatch(addLetterToCurrentGuess(key));

      return;
    }

    if (isBackspace(key)) {
      dispatch(removeLetterFromCurrentGuess());

      return;
    }

    if (isEnter(key)) {
      dispatch(addNewGuess(showAlert));
    }

    console.log('key', key);
  };

  useEffect(() => {
    document.addEventListener('keyup', onKeyUp);

    return () => {
      document.removeEventListener('keyup', onKeyUp);
    };
  }, []);

  return <Board currentGuess={currentGuess} guesses={guesses} />;
}
