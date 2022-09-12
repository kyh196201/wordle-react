import { configureStore } from '@reduxjs/toolkit';

import guessReducer from './guessSlice';

const store = configureStore({
  reducer: {
    guess: guessReducer,
  },
});

export default store;
