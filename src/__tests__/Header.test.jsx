import { render } from '@testing-library/react';

import Header from '@/components/Header';

const renderHeader = () => render(<Header />);

describe('<Header />', () => {
  it('it renders logo', () => {
    const { container } = renderHeader();

    expect(container).toHaveTextContent('Wordle');
  });
});
