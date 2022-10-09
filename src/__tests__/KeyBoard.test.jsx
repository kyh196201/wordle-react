import { render, fireEvent } from '@testing-library/react';

import { KEYS } from '@/constants/settings';

import KeyBoard from '@/components/KeyBoard';

describe('<KeyBoard />', () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    handleClick.mockClear();
  });

  const renderKeyBoard = () => {
    return render(<KeyBoard onClick={handleClick} />);
  };

  it('renders keys', () => {
    const { container } = renderKeyBoard();

    expect(container).toHaveTextContent('ENTER');
    expect(container).toHaveTextContent('Z');
  });

  context('when clicks a keyboard button', () => {
    it('calls handleClick', () => {
      const { getByText } = renderKeyBoard();

      const { ENTER } = KEYS;

      const button = getByText(ENTER.toUpperCase());

      fireEvent.click(button);

      expect(handleClick).toBeCalledWith(ENTER);
    });
  });
});
