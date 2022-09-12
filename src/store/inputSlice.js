/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  input: '',
};

export const inputSlice = createSlice({
  name: 'guess',
  initialState,
  reducers: {
    updateInput: (state, action) => {
      const { payload } = action;
      state.input = payload;
    },
  },
});

export const { updateInput } = inputSlice.actions;

export default inputSlice.reducer;
