import gameReducer from '@/store/gameSlice';

describe('guessReducer', () => {
  it('should return initial state', () => {
    const state = gameReducer(undefined, { type: undefined });

    expect(state).toEqual({
      isGameOver: false,
      answer: '',
    });
  });
});
