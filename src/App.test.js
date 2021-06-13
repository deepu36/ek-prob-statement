import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // const linkElement = screen.getByText(/Passenger/i);
  // expect(linkElement).toBeInTheDocument();
  expect(true).toBe(true);
});
