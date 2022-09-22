import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import gameReducer, {
  initialState,
  setQuestion,
  checkAnswer,
} from '@/store/gameSlice';

import { isCorrectAnswer } from '@/utils/word-utils';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('@/utils/word-utils');

describe('guessReducer', () => {
  it('should return initial state', () => {
    const state = gameReducer(undefined, { type: undefined });

    expect(state).toEqual({
      isGameOver: false,
      question: '',
    });
  });

  describe('actions', () => {
    let store = null;

    describe('setQuestion', () => {
      it('should update question', () => {
        const apple = 'apple';
        const state = gameReducer(initialState, setQuestion(apple));

        expect(state.question).toBe(apple);
      });
    });

    describe('checkAnswer', () => {
      beforeEach(() => {
        store = mockStore({
          game: {},
          guess: { guesses: [] },
        });
      });

      context('when answer is correct', () => {
        it('calls showAlert with "정답입니다." message', () => {
          const showAlert = jest.fn();
          isCorrectAnswer.mockReturnValue(true);

          store.dispatch(checkAnswer(showAlert));

          expect(showAlert).toBeCalledWith('정답입니다.');
        });
      });
    });
  });
});
