import { render } from '@testing-library/react';

import KeyBoardButton from '@/components/KeyBoardButton';

const renderKeyBoardButton = text => {
  return render(<KeyBoardButton text={text} />);
};

describe('<KeyBoardButton />', () => {
  it('renders key', () => {
    const { container } = renderKeyBoardButton('a');

    expect(container).toHaveTextContent('A');
  });
});
