import { render } from '@testing-library/react';

import Board from '@/components/Board';

import { GUESS } from '@/fixtures/guesses';

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
    const guesses = [GUESS];

    it('renders guesses', () => {
      const { queryAllByText } = renderBoard(guesses);

      guesses.forEach(guess => {
        guess.forEach(word => {
          const letters = queryAllByText(word.letter);

          expect(letters.length).not.toBe(0);
        });
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
