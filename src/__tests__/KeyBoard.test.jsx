import { render } from '@testing-library/react';

import KeyBoard from '@/components/KeyBoard';

const renderKeyBoard = () => {
  return render(<KeyBoard />);
};

describe('<KeyBoard />', () => {
  it('renders keys', () => {
    const { container } = renderKeyBoard();

    expect(container).toHaveTextContent('ENTER');
    expect(container).toHaveTextContent('Z');
  });
});
