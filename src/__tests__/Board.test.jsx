import { render } from '@testing-library/react';

import Board from '@/components/Board';

function renderBoard(guesses) {
  return render(<Board guesses={guesses} />);
}

describe('<Board />', () => {
  it('renders 6 rows', () => {
    const { container } = renderBoard([]);

    const wrapper = container.firstElementChild;
    const rows = wrapper.querySelectorAll('div');

    expect(rows.length).toBe(6);
  });

  context('with guesses', () => {
    const guesses = ['apple', 'taffy', 'straw'];

    it('renders guesses', () => {
      const { container } = renderBoard(guesses);

      guesses.forEach(guess => {
        expect(container).toHaveTextContent(guess);
      });
    });
  });

  context('without guesses', () => {
    it('renders 6 empty rows', () => {
      const { container } = renderBoard([]);

      const wrapper = container.firstElementChild;
      const rows = wrapper.querySelectorAll('div');

      expect(rows.length).toBe(6);
    });
  });
});
