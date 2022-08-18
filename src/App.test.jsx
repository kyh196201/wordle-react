import { render } from '@testing-library/react';

import App from './App';

describe('<App />', () => {
  it('renders title', () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent('Wordle');
  });

  // @TODO: remove this
  it('renders button', () => {
    const { getByText } = render(<App />);

    expect(
      getByText('버튼이에용', {
        selector: 'button',
      }),
    ).toBeInTheDocument();
  });
});
