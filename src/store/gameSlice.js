/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  isGameOver: false,
  answer: '',
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {},
});

export default gameSlice.reducer;
