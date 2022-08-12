import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('renders title', () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent('Wordle');
  });
});
