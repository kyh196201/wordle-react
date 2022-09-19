import gameReducer, { initialState, setAnswer } from '@/store/gameSlice';

describe('guessReducer', () => {
  it('should return initial state', () => {
    const state = gameReducer(undefined, { type: undefined });

    expect(state).toEqual({
      isGameOver: false,
      answer: '',
    });
  });

  describe('actions', () => {
    describe('setAnswer', () => {
      it('should update answer', () => {
        const apple = 'apple';
        const state = gameReducer(initialState, setAnswer(apple));

        expect(state.answer).toBe(apple);
      });
    });
  });
});
