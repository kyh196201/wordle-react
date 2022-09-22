/* eslint-disable no-param-reassign */
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
  },
});

// Selectors
export const selectQuestion = state => state.game.question;

// Actions
export const { setQuestion } = gameSlice.actions;

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
  return (_, getState) => {
    const state = getState();
    const { guess } = state;

    const answer = guess.guesses[guess.guesses.length - 1];

    if (isCorrectAnswer(answer)) {
      showAlert('정답입니다.');
    }
  };
}

export default gameSlice.reducer;
