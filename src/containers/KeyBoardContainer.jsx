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

  // @TODO BoardContainer와 코드 중복됨, 중복 제거
  const handleClick = (key = '') => {
    if (isAlphabet(key)) {
      dispatch(addLetterToCurrentGuess(key));

      return;
    }

    if (isBackspace(key)) {
      dispatch(removeLetterFromCurrentGuess());

      return;
    }

    if (isEnter(key)) {
      dispatch(addNewGuess());

      setTimeout(() => {
        dispatch(checkAnswer());
      }, 0);
    }
  };

  return <KeyBoard onClick={handleClick} />;
}
