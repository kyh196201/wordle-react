import { configureStore } from '@reduxjs/toolkit';

import guessReducer from './guessSlice';
import gameReducer from './gameSlice';

const store = configureStore({
  reducer: {
    guess: guessReducer,
    game: gameReducer,
  },
});

export default store;
