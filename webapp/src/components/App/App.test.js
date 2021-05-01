import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Task Tracker', () => {
  render(<App />);
  const linkElement = screen.getByText(/Task Tracker/i);
  expect(linkElement).toBeInTheDocument();
});
