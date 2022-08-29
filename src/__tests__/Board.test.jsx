import { render } from '@testing-library/react';

import Board from '@/components/Board';

function renderBoard(words) {
  return render(<Board words={words} />);
}

describe('<Board />', () => {
  const WORDS = ['apple', 'plane', 'works'];

  context('with words', () => {
    it('renders words', () => {
      const { container } = renderBoard(WORDS);

      expect(container).toHaveTextContent('apple');
      expect(container).toHaveTextContent('plane');
      expect(container).toHaveTextContent('works');
    });
  });

  context('without words', () => {
    it('renders nothing', () => {
      const { container } = renderBoard([]);

      expect(container).not.toHaveTextContent('apple');
    });
  });
});
