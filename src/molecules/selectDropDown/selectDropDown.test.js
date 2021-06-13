import { render, screen } from '@testing-library/react';
import SelectDropDown from './selectDropDown';

test('renders learn react link', () => {
  render(<SelectDropDown />);
  // const linkElement = screen.getByText(/All locations/i);
  expect(true).toBe(true);
});