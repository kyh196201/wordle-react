import { render, fireEvent } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import KeyBoardContainer from '@/containers/KeyBoardContainer';

import { KEYS } from '@/constants/settings';

jest.mock('react-redux');

describe('<KeyBoardContainer />', () => {
  const renderKeyBoardContainer = () => {
    return render(<KeyBoardContainer />);
  };

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    dispatch.mockClear();
  });

  it('renders keys', () => {
    const { container } = renderKeyBoardContainer();

    expect(container).toHaveTextContent('ENTER');
    expect(container).toHaveTextContent('Z');
  });

  context('when clicks a enter button', () => {
    it('calls handleClick', () => {
      const { getByText } = renderKeyBoardContainer();

      const button = getByText('ENTER');

      fireEvent.click(button);

      expect(dispatch).toBeCalled();
    });
  });

  context('when clicks a enter button', () => {
    it('calls handleClick', () => {
      const { getByText } = renderKeyBoardContainer();

      const { BACKSPACE } = KEYS;

      const button = getByText(BACKSPACE.toUpperCase());

      fireEvent.click(button);

      expect(dispatch).toBeCalled();
    });
  });

  context('when clicks a alphabet button', () => {
    it('calls handleClick', () => {
      const { getByText } = renderKeyBoardContainer();

      const button = getByText('A');

      fireEvent.click(button);

      expect(dispatch).toBeCalled();
    });
  });
});
