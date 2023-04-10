import { render, screen } from '@testing-library/react';
import MyComponent from '../src/Component/MyComponent';

test('renders learn react link', () => {
  render(<MyComponent />);
  const linkElement = screen.getByText(/COUNTRIES/i);
  expect(linkElement).toBeInTheDocument();
});
