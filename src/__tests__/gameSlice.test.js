import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { toast } from 'react-toastify';

import gameReducer, {
  initialState,
  setQuestion,
  checkAnswer,
  setGameOver,
} from '@/store/gameSlice';

import { isCorrectAnswer } from '@/utils/word-utils';

import { GUESS } from '@/fixtures/guesses';
import { MESSAGES } from '@/constants/settings';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('@/utils/word-utils');
jest.mock('react-toastify');

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

    describe('setGameOver', () => {
      it('should update isGameOver', () => {
        const state = gameReducer(initialState, setGameOver());

        expect(state.isGameOver).toBeTruthy();
      });
    });

    describe('checkAnswer', () => {
      context('when answer is correct', () => {
        beforeEach(() => {
          store = mockStore({
            game: { question: 'apple' },
            guess: { guesses: [] },
          });

          isCorrectAnswer.mockReturnValue(true);
        });

        it('calls showAlert with "정답입니다! 🎉" message', () => {
          store.dispatch(checkAnswer());

          expect(toast.success).toBeCalledWith(MESSAGES.SUCCESS);
        });
      });

      context('when answer is not correct and has no more chance', () => {
        beforeEach(() => {
          store = mockStore({
            game: { question: 'apple' },
            guess: { guesses: Array(6).fill(GUESS) },
          });

          isCorrectAnswer.mockReturnValue(false);
        });

        it('dispatches setGameOver and calls show alert with "다음 기회에.. 😂"', () => {
          store.dispatch(checkAnswer());

          const actions = store.getActions();

          expect(actions[0]).toEqual(setGameOver());

          expect(toast.error).toBeCalledWith(MESSAGES.GAMEOVER);
        });
      });
    });
  });
});
