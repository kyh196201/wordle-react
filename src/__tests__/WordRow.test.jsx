import { render } from '@testing-library/react';

import WordRow from '@/components/WordRow';

import { MAX_WORD_LENGTH } from '@/constants/settings';

function renderWordRow(word) {
  return render(<WordRow word={word} />);
}

/**
 * h, e, l, l, ''
 *
 * h를 텍스트로 가지는 엘리먼트가 있다.
 *
 * ''를 텍스트로 가지는 엘리먼트가 있다.
 */

describe('<WordRow />', () => {
  context('with complete word', () => {
    it('renders each letters', () => {
      const word = 'hello';

      const { queryAllByText } = renderWordRow(word);

      word.split('').forEach(char => {
        expect(queryAllByText(char).length).not.toBe(0);
      });
    });
  });

  context('without complete word', () => {
    it('renders each letters and renders empty cells', () => {
      const word = 'hel';

      const { queryAllByText, container } = renderWordRow(word);

      word.split('').forEach(char => {
        expect(queryAllByText(char).length).not.toBe(0);
      });

      expect(container.querySelectorAll('span').length).toBe(MAX_WORD_LENGTH);
    });
  });

  context('with empty word', () => {
    it('renders empty cells', () => {
      const { container } = renderWordRow('');

      expect(container.querySelectorAll('span').length).toBe(MAX_WORD_LENGTH);
    });
  });
});
