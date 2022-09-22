/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { MAX_WORD_LENGTH } from '@/constants/settings';
import { computeGuess } from '@/utils/word-utils';
import { selectQuestion } from './gameSlice';

export const initialState = {
  guesses: [],
  currentGuess: '',
};

export const guessSlice = createSlice({
  name: 'guess',
  initialState,
  reducers: {
    addGuess: (state, action) => {
      const { payload } = action;
      state.guesses.push(payload);
    },

    updateCurrentGuess: (state, action) => {
      const { payload } = action;
      state.currentGuess = payload;
    },

    emptyCurrentGuess: state => {
      state.currentGuess = '';
    },

    // current guess에 글자 붙이기
    addLetter: (state, action) => {
      state.currentGuess += action.payload;
    },

    removeLetter: state => {
      const { currentGuess } = state;

      state.currentGuess = currentGuess.slice(0, -1);
    },
  },
});

// Selectors
export const currentGuessSelector = state => state.guess.currentGuess;

export const guessesSelector = state => state.guess.guesses;

const canAddLetterSelector = state => {
  return state.guess.currentGuess.length < MAX_WORD_LENGTH;
};

const canAddGuessSelector = state => {
  return state.guess.currentGuess.length === MAX_WORD_LENGTH;
};

// Actions
export const {
  addGuess,
  updateCurrentGuess,
  emptyCurrentGuess,
  addLetter,
  removeLetter,
} = guessSlice.actions;

// currentGuess에 글자 더하는 thunk action
export function addLetterToCurrentGuess(letter = '') {
  return (dispatch, getState) => {
    const state = getState();
    const canAddLetter = canAddLetterSelector(state);

    if (!canAddLetter) {
      return;
    }

    dispatch(addLetter(letter));
  };
}

export function removeLetterFromCurrentGuess() {
  return (dispatch, getState) => {
    const state = getState();
    const {
      guess: { currentGuess },
    } = state;

    const canRemoveLetter = currentGuess.length > 0;

    if (!canRemoveLetter) {
      return;
    }

    dispatch(removeLetter());
  };
}

export function addNewGuess(showAlert) {
  return (dispatch, getState) => {
    const state = getState();

    const currentGuess = currentGuessSelector(state);
    const canAddGuess = canAddGuessSelector(state);
    const answer = selectQuestion(state);

    // 글자가 다 입력되었을 경우
    // @TODO 단어장에 글자가 있는 경우
    if (!canAddGuess) {
      // @TODO toast로 대체하기
      // https://stackoverflow.com/questions/60940636/show-alert-on-successfull-fetch-request-in-react-redux
      showAlert('단어를 모두 입력해주세요.');

      return;
    }

    const guess = computeGuess(currentGuess, answer);

    dispatch(addGuess(guess));
    dispatch(emptyCurrentGuess());
  };
}

export default guessSlice.reducer;
