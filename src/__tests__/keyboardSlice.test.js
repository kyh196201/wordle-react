import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import keyboardReducer, {
  setLettersState,
  updateLetterState,
} from '@/store/keyboardSlice';

import { WORD_STATUS } from '@/constants/settings';
import { GUESS } from '@/fixtures/guesses';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('keyboardReducer', () => {
  let store = null;

  it('should return initial state', () => {
    const state = keyboardReducer(undefined, { type: undefined });

    expect(state).toEqual({
      letterStates: {
        a: '',
        b: '',
        c: '',
        d: '',
        e: '',
        f: '',
        g: '',
        h: '',
        i: '',
        j: '',
        k: '',
        l: '',
        m: '',
        n: '',
        o: '',
        p: '',
        q: '',
        r: '',
        s: '',
        t: '',
        u: '',
        v: '',
        w: '',
        x: '',
        y: '',
        z: '',
      },
    });
  });

  describe('actions', () => {
    describe('updateLetterState', () => {
      it('should update letter state', () => {
        const prevState = {
          letterStates: {
            a: '',
          },
        };

        // guess랑 같은 interface
        const action = updateLetterState({
          letter: 'a',
          status: WORD_STATUS.CORRECT,
        });

        const state = keyboardReducer(prevState, action);

        expect(state.letterStates.a).toBe(WORD_STATUS.CORRECT);
      });

      context('when letter has state of corret of miss', () => {
        it('should not update letter state', () => {
          const statuses = [WORD_STATUS.MISS, WORD_STATUS.CORRECT];

          statuses.forEach(status => {
            const prevState = {
              letterStates: {
                a: status,
              },
            };

            const action = updateLetterState({
              letter: 'a',
              status: WORD_STATUS.EXIST,
            });

            const state = keyboardReducer(prevState, action);

            expect(state.letterStates.a).toBe(status);
          });
        });
      });
    });

    describe('setLettersState', () => {
      beforeEach(() => {
        store = mockStore({
          keyboard: {
            letterStates: {
              a: '',
            },
          },
        });
      });

      it('updates state of letters', () => {
        store.dispatch(setLettersState(GUESS));

        const actions = store.getActions();

        expect(actions.length).toBe(5);

        GUESS.forEach((word, index) => {
          expect(actions[index]).toEqual(updateLetterState(word));
        });
      });
    });
  });
});
