import { render } from '@testing-library/react';

import LetterBox from '@/components/LetterBox';

const renderLetterBox = letter => render(<LetterBox letter={letter} />);

describe('<LetterBox />', () => {
  context('with letter', () => {
    it('it renders a letter', () => {
      const letter = 'a';

      const { getByText } = renderLetterBox(letter);

      expect(getByText(letter)).toBeInTheDocument();
    });
  });

  context('without letter', () => {
    it('it renders a empty box', () => {
      const { container } = renderLetterBox('');

      // @NOTE toBeEmpty 대신 사용!!
      expect(container.firstChild).toBeEmptyDOMElement();
    });
  });
});
