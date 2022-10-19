import { render, fireEvent } from '@testing-library/react';

import { KEYS } from '@/constants/settings';

import KeyBoard from '@/components/KeyBoard';

describe('<KeyBoard />', () => {
  const handleChar = jest.fn();
  const handleEnter = jest.fn();
  const handleDelete = jest.fn();

  beforeEach(() => {
    handleChar.mockClear();
    handleEnter.mockClear();
    handleDelete.mockClear();
  });

  const renderKeyBoard = () => {
    return render(
      <KeyBoard
        onChar={handleChar}
        onEnter={handleEnter}
        onDelete={handleDelete}
      />,
    );
  };

  it('renders keys', () => {
    const { container } = renderKeyBoard();

    expect(container).toHaveTextContent('ENTER');
    expect(container).toHaveTextContent('BACKSPACE');
    expect(container).toHaveTextContent('Z');
  });

  context('when clicks a enter button', () => {
    it('calls handleClick', () => {
      const { getByText } = renderKeyBoard();

      const { ENTER } = KEYS;

      const button = getByText(ENTER.toUpperCase());

      fireEvent.click(button);

      expect(handleEnter).toBeCalled();
    });
  });

  context('when clicks a backspace button', () => {
    it('calls handleClick', () => {
      const { getByText } = renderKeyBoard();

      const { BACKSPACE } = KEYS;

      const button = getByText(BACKSPACE.toUpperCase());

      fireEvent.click(button);

      expect(handleDelete).toBeCalled();
    });
  });

  context('when clicks a alphabet button', () => {
    it('calls handleClick', () => {
      const { getByText } = renderKeyBoard();

      const button = getByText('A');

      fireEvent.click(button);

      expect(handleChar).toBeCalled();
    });
  });
});
