import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

function renderApp() {
  return render(<App />);
}

jest.mock('react-redux');

describe('<App />', () => {
  useSelector.mockImplementation(selector =>
    selector({
      guess: {
        currentGuess: given.currentGuess,
      },
    }),
  );

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

      const wrapper = container.firstElementChild;
      const rows = wrapper.querySelectorAll('div');

      // @TODO 테스트 내용 수정 필요
      // board div + div in board * 6
      expect(rows.length).toBe(7);
    });
  });
});
