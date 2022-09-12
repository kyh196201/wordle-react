import { render } from '@testing-library/react';

import BoardContainer from '@/containers/BoardContainer';

import { useSelector } from 'react-redux';

jest.mock('react-redux');

function renderBoardContainer() {
  return render(<BoardContainer />);
}

describe('<BoardContainer />', () => {
  context('with current guess', () => {
    useSelector.mockImplementation(selector =>
      selector({
        guess: {
          currentGuess: 'apple',
        },
      }),
    );

    it('renders current guess', () => {
      const { container } = renderBoardContainer();

      expect(container).toHaveTextContent('apple');
    });
  });
});
