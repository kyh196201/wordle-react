import guessReducer, { addGuess, initialState } from '@/store/guessSlice';

import { GUESS } from '@/fixtures/guesses';

describe('guessReducer', () => {
  it('should return initial state', () => {
    const state = guessReducer(undefined, { type: undefined });

    expect(state).toEqual({
      guesses: [],
    });
  });

  describe('actions', () => {
    describe('addGuess', () => {
      it('should add new guess', () => {
        const state = guessReducer(initialState, addGuess(GUESS));

        expect(state.guesses).toHaveLength(1);
      });
    });
  });
});
