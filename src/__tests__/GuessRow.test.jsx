import { render } from '@testing-library/react';

import GuessRow from '@/components/GuessRow';

import { GUESS } from '@/fixtures/guesses';

const renderGuessRow = guess => render(<GuessRow guess={guess} />);

describe('<GuessRow />', () => {
  it('renders letters in guess', () => {
    const { queryAllByText } = renderGuessRow(GUESS);

    GUESS.forEach(({ letter }) => {
      const elements = queryAllByText(letter);

      expect(elements.length).not.toBe(0);
    });
  });
});
