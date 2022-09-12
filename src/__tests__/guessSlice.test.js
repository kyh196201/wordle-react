import guessReducer, {
  addGuess,
  updateCurrentGuess,
  initialState,
} from '@/store/guessSlice';

import { GUESS } from '@/fixtures/guesses';

describe('guessReducer', () => {
  it('should return initial state', () => {
    const state = guessReducer(undefined, { type: undefined });

    expect(state).toEqual({
      guesses: [],
      currentGuess: '',
    });
  });

  describe('actions', () => {
    describe('addGuess', () => {
      it('should add new guess', () => {
        const state = guessReducer(initialState, addGuess(GUESS));

        expect(state.guesses).toHaveLength(1);
      });
    });

    describe('updateCurrentGuess', () => {
      it('should update current guess', () => {
        const state = guessReducer(initialState, updateCurrentGuess('apple'));

        expect(state.currentGuess).toBe('apple');
      });
    });
  });
});
