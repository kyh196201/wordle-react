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
export const selectIsGameOver = state => state.game.isGameOver;

// Actions
export const { setQuestion, setGameOver } = gameSlice.actions;

export function checkAnswer() {
  return (dispatch, getState) => {
    const state = getState();
    const {
      guess: { guesses },
      game: { question },
    } = state;

    const answer = guesses[guesses.length - 1];

    if (isCorrectAnswer(answer, question)) {
      toast.success(MESSAGES.SUCCESS);

      return;
    }

    const isGameOver = guesses.length === MAX_CHANCES;

    if (isGameOver) {
      dispatch(setGameOver());

      const gameOverMessage = `${MESSAGES.GAMEOVER} 정답은: ${question}`;

      toast.error(gameOverMessage);
    }
  };
}

export default gameSlice.reducer;
