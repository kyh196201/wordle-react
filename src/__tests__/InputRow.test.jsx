import { render } from '@testing-library/react';

import InputRow from '@/components/InputRow';

import { MAX_WORD_LENGTH } from '@/constants/settings';

function renderInputRow(input) {
  return render(<InputRow input={input} />);
}

/**
 * h, e, l, l, ''
 *
 * h를 텍스트로 가지는 엘리먼트가 있다.
 *
 * ''를 텍스트로 가지는 엘리먼트가 있다.
 */

describe('<InputRow />', () => {
  context('with complete word', () => {
    it('renders each letters', () => {
      const input = 'hello';

      const { queryAllByText } = renderInputRow(input);

      input.split('').forEach(char => {
        expect(queryAllByText(char).length).not.toBe(0);
      });
    });
  });

  context('without complete word', () => {
    it('renders each letters and renders empty cells', () => {
      const input = 'hel';

      const { queryAllByText, container } = renderInputRow(input);

      input.split('').forEach(char => {
        expect(queryAllByText(char).length).not.toBe(0);
      });

      expect(container.querySelectorAll('span').length).toBe(MAX_WORD_LENGTH);
    });
  });

  context('with empty word', () => {
    it('renders empty cells', () => {
      const { container } = renderInputRow('');

      expect(container.querySelectorAll('span').length).toBe(MAX_WORD_LENGTH);
    });
  });
});
