import { render, fireEvent } from '@testing-library/react';

import KeyBoardButton from '@/components/KeyBoardButton';

describe('<KeyBoardButton />', () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    handleClick.mockClear();
  });

  const renderKeyBoardButton = ({ text, disabled = false }) => {
    return render(
      <KeyBoardButton text={text} disabled={disabled} onClick={handleClick} />,
    );
  };

  it('renders key', () => {
    const { getByText } = renderKeyBoardButton({
      text: 'a',
      disabled: false,
    });

    // 대문자로 렌더링됨
    const button = getByText('A');

    fireEvent.click(button);

    expect(handleClick).toBeCalledWith('a');
  });

  context('when disabled', () => {
    it('not calls handleClick', () => {
      const { getByText } = renderKeyBoardButton({
        text: 'a',
        disabled: true,
      });

      // 대문자로 렌더링됨
      const button = getByText('A');

      fireEvent.click(button);

      expect(handleClick).not.toBeCalled();
    });
  });
});
