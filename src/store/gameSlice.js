/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  isGameOver: false,
  answer: '',
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setAnswer: (state, action) => {
      state.answer = action.payload;
    },
  },
});

// Selectors
export const answerSelector = state => state.game.answer;

// Actions
export const { setAnswer } = gameSlice.actions;

export default gameSlice.reducer;
