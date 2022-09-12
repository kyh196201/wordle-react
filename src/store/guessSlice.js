import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  guesses: [],
};

export const guessSlice = createSlice({
  name: 'guess',
  initialState,
  reducers: {
    addGuess: (state, action) => {
      const { payload } = action;
      state.guesses.push(payload);
    },
  },
});

export const { addGuess } = guessSlice.actions;

export default guessSlice.reducer;
