import { configureStore } from '@reduxjs/toolkit';

import guessReducer from './guessSlice';
import gameReducer from './gameSlice';
import keyboardReducer from './keyboardSlice';

const store = configureStore({
  reducer: {
    guess: guessReducer,
    game: gameReducer,
    keyboard: keyboardReducer,
  },
});

export default store;
