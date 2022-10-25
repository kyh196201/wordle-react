import { render } from '@testing-library/react';

import GuessRow from '@/components/GuessRow';

const renderGuessRow = (guess, question) =>
  render(<GuessRow guess={guess} question={question} />);

describe('<GuessRow />', () => {
  it('renders letters in guess', () => {
    const guess = 'apple';
    const question = 'apple';

    const { queryAllByText } = renderGuessRow(guess, question);

    guess.split('').forEach(letter => {
      const elements = queryAllByText(letter);

      expect(elements.length).not.toBe(0);
    });
  });
});
