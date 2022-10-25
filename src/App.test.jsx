import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import App from './App';

function renderApp() {
  return render(<App />);
}

jest.mock('react-redux');

describe('<App />', () => {
  useSelector.mockImplementation(selector =>
    selector({
      // @TODO 답 확인하려고 임시로 작성함 나중에 삭제
      game: {
        question: '',
      },
      guess: {
        currentGuess: given.currentGuess,
      },
    }),
  );

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    dispatch.mockClear();
  });

  it('renders logo', () => {
    const { container } = renderApp();

    expect(container).toHaveTextContent('Wordle');
  });

  context('with current guess', () => {
    given('currentGuess', () => 'apple');

    it('renders current guess', () => {
      const { container } = renderApp();

      expect(container).toHaveTextContent('apple');
    });
  });

  context('without current guess', () => {
    given('currentGuess', () => '');

    it('renders empty board', () => {
      const { container } = renderApp();

      const board = container.querySelector('.board');

      expect(board).not.toBeNull();

      const rows = board.querySelectorAll('.row');

      expect(rows.length).toBe(6);
    });
  });

  it('calls dispatch', () => {
    renderApp();

    expect(dispatch).toBeCalled();
  });
});
