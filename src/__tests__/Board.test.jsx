import { render } from '@testing-library/react';

import Board from '@/components/Board';

import { GUESSES } from '@/fixtures/guesses';

function renderBoard(guesses, currentGuess, question) {
  return render(
    <Board guesses={guesses} currentGuess={currentGuess} question={question} />,
  );
}

describe('<Board />', () => {
  it('renders 6 rows', () => {
    const { container } = renderBoard([]);

    const wrapper = container.firstElementChild;
    const rows = wrapper.querySelectorAll('div');

    expect(rows.length).toBe(6);
  });

  context('with guesses', () => {
    it('renders guesses', () => {
      const { queryAllByText } = renderBoard(GUESSES, '', 'apple');

      GUESSES.forEach(guess => {
        guess.split('').forEach(word => {
          const letters = queryAllByText(word);

          expect(letters.length).not.toBe(0);
        });
      });
    });
  });

  context('without guesses', () => {
    it('renders 6 empty rows', () => {
      const { container } = renderBoard([], '', '');

      const wrapper = container.firstElementChild;
      const rows = wrapper.querySelectorAll('div');

      expect(rows.length).toBe(6);
    });
  });

  context('with current guess', () => {
    const currentGuess = 'apple';

    it('renders current guess row', () => {
      const { container } = renderBoard([], currentGuess);

      expect(container).toHaveTextContent(currentGuess);
    });
  });

  context('without current guess', () => {
    it('renders 6 empty rows', () => {
      const { container } = renderBoard();

      const wrapper = container.firstElementChild;
      const rows = wrapper.querySelectorAll('div');

      expect(rows.length).toBe(6);
    });
  });
});
