/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { MAX_WORD_LENGTH } from '@/constants/settings';

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

    // current guess에 글자 붙이기
    addLetter: (state, action) => {
      state.currentGuess += action.payload;
    },
  },
});

// Selectors
export const currentGuessSelector = state => state.guess.currentGuess;

const canAddLetterSelector = state => {
  return state.guess.currentGuess.length < MAX_WORD_LENGTH;
};

// Actions
export const { addGuess, updateCurrentGuess, addLetter } = guessSlice.actions;

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

export default guessSlice.reducer;
