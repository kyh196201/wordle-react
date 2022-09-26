/* eslint-disable no-param-reassign */
import { MAX_CHANCES, MESSAGES } from '@/constants/settings';
import { isCorrectAnswer } from '@/utils/word-utils';
import { createSlice } from '@reduxjs/toolkit';

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

export function checkAnswer(showAlert) {
  /**
   * - 마지막 guess 가져오기
   *
   * - 정답이랑 비교 => 마지막 guess, answer 비교
   *
   * - 정답일 경우
   *
   * - 정답입니다 alert
   *
   * - 정답이 아닐 경우
   *
   * - 모든 기회 소진했는지 체크,
   *
   * - 모든 기회 소진했을 경우
   *
   * - alert game over
   */
  return (dispatch, getState) => {
    const state = getState();
    const {
      guess: { guesses },
    } = state;

    const answer = guesses[guesses.length - 1];

    if (isCorrectAnswer(answer)) {
      showAlert(MESSAGES.SUCCESS);

      return;
    }

    const noMoreChance = guesses.length === MAX_CHANCES;

    if (noMoreChance) {
      dispatch(setGameOver());
      showAlert(MESSAGES.GAMEOVER);
    }
  };
}

export default gameSlice.reducer;
