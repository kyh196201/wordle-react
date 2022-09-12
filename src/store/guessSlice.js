/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

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
  },
});

export const { addGuess, updateCurrentGuess } = guessSlice.actions;

export default guessSlice.reducer;
