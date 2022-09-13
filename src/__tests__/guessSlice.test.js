import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import guessReducer, {
  addGuess,
  updateCurrentGuess,
  addLetter,
  addLetterToCurrentGuess,
  initialState,
} from '@/store/guessSlice';

import { GUESS } from '@/fixtures/guesses';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

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

    describe('updateCurrentGuess', () => {
      it('should update current guess', () => {
        const state = guessReducer(initialState, updateCurrentGuess('apple'));

        expect(state.currentGuess).toBe('apple');
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
  });
});
