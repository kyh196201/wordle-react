import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { toast } from 'react-toastify';

import guessReducer, {
  initialState,
  addGuess,
  addNewGuess,
  updateCurrentGuess,
  emptyCurrentGuess,
  addLetter,
  addLetterToCurrentGuess,
  removeLetter,
  removeLetterFromCurrentGuess,
} from '@/store/guessSlice';

import { GUESS } from '@/fixtures/guesses';
import { computeGuess } from '@/utils/word-utils';
import { MESSAGES } from '@/constants/settings';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('react-toastify');

describe('guessReducer', () => {
  let store = null;

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

    // @TODO 스토어의 최신 상태를 가져오지 못해서 thunk action 방식으로 작성함 수정 필요
    describe('addNewGuess', () => {
      context('when current guess has enough length', () => {
        beforeEach(() => {
          store = mockStore({
            game: {
              question: 'apple',
            },
            guess: {
              currentGuess: 'apple',
            },
          });
        });

        it('should add new guess and empty current guess', () => {
          store.dispatch(addNewGuess());

          const actions = store.getActions();

          const guessResult = computeGuess('apple', 'apple');

          expect(actions[0]).toEqual(addGuess(guessResult));
          expect(actions[1]).toEqual(emptyCurrentGuess());
        });
      });

      context('when current guess has not enough length', () => {
        beforeEach(() => {
          store = mockStore({
            game: {
              question: 'apple',
            },
            guess: {
              currentGuess: 'appl',
            },
          });
        });

        it('opens warning toast with "단어를 모두 입력해주세요! 👀"', () => {
          store.dispatch(addNewGuess());

          const actions = store.getActions();

          expect(actions.length).toBe(0);
          expect(toast.warn).toBeCalledWith(MESSAGES.NOT_ENOUGH_WORD);
        });
      });

      context('when current guess is not valid word', () => {
        beforeEach(() => {
          store = mockStore({
            game: {
              question: 'apple',
            },
            guess: {
              currentGuess: 'aaaab',
            },
          });
        });

        it('calls showAlert with "존재하지 않는 단어입니다. 😣"', () => {
          store.dispatch(addNewGuess());

          const actions = store.getActions();

          expect(actions.length).toBe(0);
          expect(toast.warn).toBeCalledWith(MESSAGES.INVALID_WORD);
        });
      });
    });

    describe('updateCurrentGuess', () => {
      it('should update current guess', () => {
        const state = guessReducer(initialState, updateCurrentGuess('apple'));

        expect(state.currentGuess).toBe('apple');
      });
    });

    describe('emptyCurrentGuess', () => {
      it('should empty current guess', () => {
        const state = guessReducer(
          { currentGuess: 'apple' },
          emptyCurrentGuess(),
        );

        expect(state.currentGuess).toBe('');
      });
    });

    describe('addLetter', () => {
      it('should add letter to current guess', () => {
        const state = guessReducer({ currentGuess: 'appl' }, addLetter('e'));

        expect(state.currentGuess).toBe('apple');
      });
    });

    describe('addLetterToCurrentGuess', () => {
      context('when current guess is not full', () => {
        // setup store
        beforeEach(() => {
          store = mockStore({
            guess: {
              currentGuess: '',
            },
          });
        });

        it('dispatch addLetter', () => {
          store.dispatch(addLetterToCurrentGuess('a'));

          const actions = store.getActions();

          expect(actions[0]).toEqual(addLetter('a'));
        });
      });

      context('when current guess is full', () => {
        // setup store
        beforeEach(() => {
          store = mockStore({
            guess: {
              currentGuess: 'apple',
            },
          });
        });

        it('does not dispatch addLetter', () => {
          store.dispatch(addLetterToCurrentGuess('a'));

          const actions = store.getActions();

          expect(actions.length).toBe(0);
        });
      });
    });

    describe('removeLetter', () => {
      it('removes last letter of current guess', () => {
        const state = guessReducer({ currentGuess: 'apple' }, removeLetter());

        expect(state.currentGuess).toBe('appl');
      });
    });

    describe('removeLetterFromCurrentGuess', () => {
      context('when current guess has length', () => {
        // setup store
        beforeEach(() => {
          store = mockStore({
            guess: {
              currentGuess: 'apple',
            },
          });
        });

        it('removes last letter of current guess', () => {
          store.dispatch(removeLetterFromCurrentGuess());

          const actions = store.getActions();

          expect(actions[0]).toEqual(removeLetter());
        });
      });

      context('when current guess has no length', () => {
        // setup store
        beforeEach(() => {
          store = mockStore({
            guess: {
              currentGuess: '',
            },
          });
        });

        it('does not remove letter', () => {
          store.dispatch(removeLetterFromCurrentGuess());

          const actions = store.getActions();

          expect(actions.length).toBe(0);
        });
      });
    });
  });
});
