import inputReducer, { updateInput } from '@/store/inputSlice';

describe('inputReducer', () => {
  it('should return initial state', () => {
    const state = inputReducer(undefined, { type: undefined });

    expect(state).toEqual({
      input: '',
    });
  });

  describe('actions', () => {
    describe('updateInput', () => {
      it('update input', () => {
        const state = inputReducer({ input: '' }, updateInput('apple'));

        expect(state.input).toBe('apple');
      });
    });
  });
});
