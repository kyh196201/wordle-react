import { render, fireEvent } from '@testing-library/react';

import KeyBoardButton from '@/components/KeyBoardButton';

describe('<KeyBoardButton />', () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    handleClick.mockClear();
  });

  const renderKeyBoardButton = text => {
    return render(<KeyBoardButton text={text} onClick={handleClick} />);
  };

  it('renders key', () => {
    const { container } = renderKeyBoardButton('A');

    expect(container).toHaveTextContent('A');
  });

  context('when clicks a keyboard button', () => {
    it('calls handleClick', () => {
      const { getByText } = renderKeyBoardButton('a');

      // 대문자로 렌더링됨
      const button = getByText('A');

      fireEvent.click(button);

      expect(handleClick).toBeCalledWith('a');
    });
  });
});
