/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { MAX_CHANCES, MESSAGES } from '@/constants/settings';
import { isCorrectAnswer } from '@/utils/word-utils';

export const initialState = {
  isGameOver: false,
  question: '',
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setQuestion: (state, action) => {
      state.question = action.payload;
    },

    setGameOver: state => {
      state.isGameOver = true;
    },
  },
});

// Selectors
export const selectQuestion = state => state.game.question;

// Actions
export const { setQuestion, setGameOver } = gameSlice.actions;

export function checkAnswer() {
  return (dispatch, getState) => {
    const state = getState();
    const {
      guess: { guesses },
    } = state;

    const answer = guesses[guesses.length - 1];

    if (isCorrectAnswer(answer)) {
      toast.success(MESSAGES.SUCCESS);

      return;
    }

    const noMoreChance = guesses.length === MAX_CHANCES;

    if (noMoreChance) {
      dispatch(setGameOver());
      toast.error(MESSAGES.GAMEOVER);
    }
  };
}

export default gameSlice.reducer;
