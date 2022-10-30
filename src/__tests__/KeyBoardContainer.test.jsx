import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import KeyBoardContainer from '@/containers/KeyBoardContainer';

import KEYS from '@/fixtures/keys';

jest.mock('react-redux');

describe('<KeyBoardContainer />', () => {
  const renderKeyBoardContainer = () => {
    return render(<KeyBoardContainer />);
  };

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation(selector =>
    selector({
      game: {
        isGameOver: given.isGameOver,
      },
      guess: {
        guesses: [],
      },
    }),
  );

  beforeEach(() => {
    dispatch.mockClear();
  });

  it('renders keys', () => {
    const { container } = renderKeyBoardContainer();

    KEYS.forEach(text => {
      expect(container).toHaveTextContent(text);
    });
  });

  context('when playing game', () => {
    given('isGameOver', () => false);

    it('listens click event', () => {
      const { getByText } = renderKeyBoardContainer();

      KEYS.forEach(text => {
        const button = getByText(text);

        fireEvent.click(button);

        expect(dispatch).toBeCalled();
      });
    });
  });

  context('when playing game', () => {
    given('isGameOver', () => true);

    it('listens click event', () => {
      const { getByText } = renderKeyBoardContainer();

      KEYS.forEach(text => {
        const button = getByText(text);

        fireEvent.click(button);

        expect(dispatch).not.toBeCalled();
      });
    });
  });
});
