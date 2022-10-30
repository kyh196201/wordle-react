import { render, fireEvent } from '@testing-library/react';

import KeyBoard from '@/components/KeyBoard';

import KEYS from '@/fixtures/keys';

describe('<KeyBoard />', () => {
  const handleChar = jest.fn();
  const handleEnter = jest.fn();
  const handleDelete = jest.fn();

  beforeEach(() => {
    handleChar.mockClear();
    handleEnter.mockClear();
    handleDelete.mockClear();
  });

  const renderKeyBoard = (disabled = false) => {
    return render(
      <KeyBoard
        disabled={disabled}
        onChar={handleChar}
        onEnter={handleEnter}
        onDelete={handleDelete}
      />,
    );
  };

  it('renders keys', () => {
    const { container } = renderKeyBoard();

    KEYS.forEach(text => {
      expect(container).toHaveTextContent(text);
    });
  });

  context('when clicks a enter button', () => {
    it('calls handleEnter', () => {
      const { getByText } = renderKeyBoard();

      const button = getByText('ENTER');

      fireEvent.click(button);

      expect(handleEnter).toBeCalled();
    });
  });

  context('when clicks a backspace button', () => {
    it('calls handleDelete', () => {
      const { getByText } = renderKeyBoard();

      const button = getByText('BACKSPACE');

      fireEvent.click(button);

      expect(handleDelete).toBeCalled();
    });
  });

  context('when clicks a alphabet button', () => {
    it('calls handleChar', () => {
      const { getByText } = renderKeyBoard();

      const button = getByText('A');

      fireEvent.click(button);

      expect(handleChar).toBeCalled();
    });
  });

  context('when disabled', () => {
    it('not listens click event', () => {
      const { getByText } = renderKeyBoard(true);

      // 대문자로 렌더링됨
      const button = getByText('A');

      fireEvent.click(button);

      expect(handleChar).not.toBeCalled();
    });
  });
});
