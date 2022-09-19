import { render } from '@testing-library/react';

import EmptyRow from '@/components/EmptyRow';

const renderEmptyRow = () => render(<EmptyRow />);

describe('<EmptyRow />', () => {
  it('renders empty letter boxes', () => {
    const { container } = renderEmptyRow();

    expect(container.querySelectorAll('span').length).toBe(5);
  });
});
