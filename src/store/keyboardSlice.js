/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { generateAlphabet } from '@/utils';
import { WORD_STATUS } from '@/constants/settings';
import { addNewGuess } from './guessSlice';

// 참고: https://dev.to/_bigblind/quick-tip-transform-an-array-into-an-object-using-reduce-2gh6
function createKeyboardStates() {
  const alphabets = generateAlphabet();

  return alphabets.reduce((states, alphabet) => {
    return {
      ...states,
      [alphabet]: '',
    };
  }, {});
}

export const initialState = {
  letterStates: createKeyboardStates(),
};

export const keyboardSlice = createSlice({
  name: 'keyboard',
  initialState,
  reducers: {
    updateLetterState: (state, action) => {
      const {
        payload: { letter, status },
      } = action;

      const currentState = state.letterStates[letter];

      if (
        currentState === WORD_STATUS.CORRECT ||
        currentState === WORD_STATUS.MISS
      ) {
        return;
      }

      state.letterStates[letter] = status;
    },
  },

  extraReducers: builder => {
    builder.addCase(addNewGuess, (state, action) => {
      console.log('state', state);
      console.log('action', action);
    });
  },
});

// actions
export const { updateLetterState } = keyboardSlice.actions;

// #region thunk actions
// TODO 네이밍 생각해보기
/**
 * 입력받은 추측 결과에 따라 알파벳들 상태 변경하기
 *
 * @param {Array} guess : computeGuess를 실행한 결과
 */
export function setLettersState(guess = []) {
  return dispatch => {
    guess.forEach(word => {
      dispatch(updateLetterState(word));
    });
  };
}
// #endregion

export default keyboardSlice.reducer;
