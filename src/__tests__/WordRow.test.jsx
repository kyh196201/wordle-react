import { render } from '@testing-library/react';

import WordRow from '@/components/WordRow';

const renderWordRow = children => render(<WordRow>{children}</WordRow>);

describe('<WordRow />', () => {
  it('renders children', () => {
    const { getByText } = renderWordRow(<div>children</div>);

    expect(getByText('children')).toBeInTheDocument();
  });
});
