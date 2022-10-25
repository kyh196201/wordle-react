import { render } from '@testing-library/react';

import BoardContainer from '@/containers/BoardContainer';

import { useSelector } from 'react-redux';

jest.mock('react-redux');

function renderBoardContainer() {
  return render(<BoardContainer />);
}

describe('<BoardContainer />', () => {
  useSelector.mockImplementation(selector =>
    selector({
      guess: {
        currentGuess: given.currentGuess,
      },
      game: {
        question: 'apple',
      },
    }),
  );

  context('with current guess', () => {
    given('currentGuess', () => 'apple');

    it('renders current guess', () => {
      const { container } = renderBoardContainer();

      expect(container).toHaveTextContent('apple');
    });
  });

  context('without current guess', () => {
    given('currentGuess', () => '');

    it('renders 6 empty rows', () => {
      const { container } = renderBoardContainer();

      const wrapper = container.firstElementChild;
      const rows = wrapper.querySelectorAll('div');

      expect(rows.length).toBe(6);
    });
  });
});
