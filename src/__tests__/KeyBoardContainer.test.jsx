import { render, fireEvent } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import KeyBoardContainer from '@/containers/KeyBoardContainer';

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

  context('when clicks a keyboard button', () => {
    it('calls handleClick', () => {
      const { getByText } = renderKeyBoardContainer();

      const button = getByText('ENTER');

      fireEvent.click(button);

      expect(dispatch).toBeCalled();
    });
  });
});
